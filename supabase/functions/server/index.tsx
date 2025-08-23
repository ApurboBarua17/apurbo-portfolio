import { Hono } from "npm:hono";
import { cors } from "npm:hono/cors";
import { logger } from "npm:hono/logger";
import * as kv from "./kv_store.tsx";

const app = new Hono();

// Enable logger
app.use('*', logger(console.log));

// Enable CORS for all routes and methods
app.use(
  "/*",
  cors({
    origin: "*",
    allowHeaders: ["Content-Type", "Authorization"],
    allowMethods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    exposeHeaders: ["Content-Length"],
    maxAge: 600,
  }),
);

// Health check endpoint
app.get("/make-server-c30ebdae/health", (c) => {
  return c.json({ status: "ok", timestamp: new Date().toISOString() });
});

// Contact form submission endpoint
app.post("/make-server-c30ebdae/contact", async (c) => {
  try {
    const body = await c.req.json();
    const { name, email, message, subject } = body;
    
    // Validate required fields
    if (!name || !email || !message) {
      return c.json({ error: "Missing required fields" }, 400);
    }
    
    // Store contact submission
    const submissionId = crypto.randomUUID();
    const submission = {
      id: submissionId,
      name,
      email,
      message,
      subject: subject || "Portfolio Contact",
      timestamp: new Date().toISOString(),
      userAgent: c.req.header("User-Agent"),
      ip: c.req.header("x-forwarded-for") || "unknown"
    };
    
    await kv.set(`contact:${submissionId}`, submission);
    console.log(`New contact submission: ${submissionId} from ${email}`);
    
    return c.json({ 
      success: true, 
      id: submissionId,
      message: "Thank you for your message! I'll get back to you soon." 
    });
  } catch (error) {
    console.log("Contact form submission error:", error);
    return c.json({ error: "Failed to submit contact form" }, 500);
  }
});

// Get all contact submissions (for admin use)
app.get("/make-server-c30ebdae/contact", async (c) => {
  try {
    const submissions = await kv.getByPrefix("contact:");
    return c.json({ 
      success: true, 
      count: submissions.length,
      submissions: submissions.sort((a, b) => 
        new Date(b.timestamp).getTime() - new Date(a.timestamp).getTime()
      )
    });
  } catch (error) {
    console.log("Error fetching contact submissions:", error);
    return c.json({ error: "Failed to fetch submissions" }, 500);
  }
});

// Page view analytics endpoint
app.post("/make-server-c30ebdae/analytics", async (c) => {
  try {
    const body = await c.req.json();
    const { page, referrer, action } = body;
    
    const viewId = crypto.randomUUID();
    const analytics = {
      id: viewId,
      page: page || "/",
      referrer: referrer || "direct",
      action: action || "page_view",
      timestamp: new Date().toISOString(),
      userAgent: c.req.header("User-Agent"),
      ip: c.req.header("x-forwarded-for") || "unknown"
    };
    
    await kv.set(`analytics:${viewId}`, analytics);
    
    return c.json({ success: true });
  } catch (error) {
    console.log("Analytics tracking error:", error);
    return c.json({ error: "Failed to track analytics" }, 500);
  }
});

// Get analytics data
app.get("/make-server-c30ebdae/analytics", async (c) => {
  try {
    const views = await kv.getByPrefix("analytics:");
    
    // Basic analytics calculations
    const totalViews = views.length;
    const uniqueIPs = new Set(views.map(v => v.ip)).size;
    const topPages = views.reduce((acc, view) => {
      acc[view.page] = (acc[view.page] || 0) + 1;
      return acc;
    }, {});
    
    return c.json({
      success: true,
      totalViews,
      uniqueVisitors: uniqueIPs,
      topPages: Object.entries(topPages)
        .sort(([,a], [,b]) => b - a)
        .slice(0, 10),
      recentViews: views
        .sort((a, b) => new Date(b.timestamp).getTime() - new Date(a.timestamp).getTime())
        .slice(0, 20)
    });
  } catch (error) {
    console.log("Error fetching analytics:", error);
    return c.json({ error: "Failed to fetch analytics" }, 500);
  }
});

// Resume download tracking
app.post("/make-server-c30ebdae/resume-download", async (c) => {
  try {
    const body = await c.req.json();
    const { referrer } = body;
    
    const downloadId = crypto.randomUUID();
    const download = {
      id: downloadId,
      action: "resume_download",
      referrer: referrer || "direct",
      timestamp: new Date().toISOString(),
      userAgent: c.req.header("User-Agent"),
      ip: c.req.header("x-forwarded-for") || "unknown"
    };
    
    await kv.set(`download:${downloadId}`, download);
    console.log(`Resume downloaded: ${downloadId}`);
    
    return c.json({ success: true });
  } catch (error) {
    console.log("Resume download tracking error:", error);
    return c.json({ error: "Failed to track download" }, 500);
  }
});

// Get download statistics
app.get("/make-server-c30ebdae/downloads", async (c) => {
  try {
    const downloads = await kv.getByPrefix("download:");
    
    return c.json({
      success: true,
      totalDownloads: downloads.length,
      recentDownloads: downloads
        .sort((a, b) => new Date(b.timestamp).getTime() - new Date(a.timestamp).getTime())
        .slice(0, 20)
    });
  } catch (error) {
    console.log("Error fetching download stats:", error);
    return c.json({ error: "Failed to fetch download stats" }, 500);
  }
});

// Portfolio project views tracking
app.post("/make-server-c30ebdae/project-view", async (c) => {
  try {
    const body = await c.req.json();
    const { projectTitle, projectUrl } = body;
    
    const viewId = crypto.randomUUID();
    const projectView = {
      id: viewId,
      projectTitle,
      projectUrl,
      action: "project_view",
      timestamp: new Date().toISOString(),
      userAgent: c.req.header("User-Agent"),
      ip: c.req.header("x-forwarded-for") || "unknown"
    };
    
    await kv.set(`project:${viewId}`, projectView);
    
    return c.json({ success: true });
  } catch (error) {
    console.log("Project view tracking error:", error);
    return c.json({ error: "Failed to track project view" }, 500);
  }
});

// Get project view statistics
app.get("/make-server-c30ebdae/project-stats", async (c) => {
  try {
    const projectViews = await kv.getByPrefix("project:");
    
    const projectStats = projectViews.reduce((acc, view) => {
      const title = view.projectTitle || "Unknown";
      acc[title] = (acc[title] || 0) + 1;
      return acc;
    }, {});
    
    return c.json({
      success: true,
      totalProjectViews: projectViews.length,
      projectStats: Object.entries(projectStats)
        .sort(([,a], [,b]) => b - a)
        .map(([title, views]) => ({ title, views }))
    });
  } catch (error) {
    console.log("Error fetching project stats:", error);
    return c.json({ error: "Failed to fetch project stats" }, 500);
  }
});

// Simple admin dashboard endpoint
app.get("/make-server-c30ebdae/dashboard", async (c) => {
  try {
    const [contacts, analytics, downloads, projects] = await Promise.all([
      kv.getByPrefix("contact:"),
      kv.getByPrefix("analytics:"),
      kv.getByPrefix("download:"),
      kv.getByPrefix("project:")
    ]);
    
    return c.json({
      success: true,
      dashboard: {
        totalContacts: contacts.length,
        totalPageViews: analytics.length,
        totalDownloads: downloads.length,
        totalProjectViews: projects.length,
        recentActivity: [
          ...contacts.slice(-3).map(c => ({ type: "contact", data: c })),
          ...analytics.slice(-3).map(a => ({ type: "analytics", data: a })),
          ...downloads.slice(-3).map(d => ({ type: "download", data: d }))
        ].sort((a, b) => 
          new Date(b.data.timestamp).getTime() - new Date(a.data.timestamp).getTime()
        )
      }
    });
  } catch (error) {
    console.log("Dashboard error:", error);
    return c.json({ error: "Failed to fetch dashboard data" }, 500);
  }
});

// Error handling for undefined routes
app.notFound((c) => {
  return c.json({ error: "Endpoint not found" }, 404);
});

// Global error handler
app.onError((err, c) => {
  console.log("Server error:", err);
  return c.json({ error: "Internal server error" }, 500);
});

Deno.serve(app.fetch);