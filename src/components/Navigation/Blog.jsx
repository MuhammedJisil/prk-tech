import React, { useState } from 'react';
import { Title, Meta } from "react-head";
import {
  Calendar,
  User,
  ArrowRight,
  Search,
  TrendingUp,
  Code,
  Palette,
  Smartphone,
  Shield,
  Zap,
  Globe,
  ChevronLeft
} from "lucide-react";

function Blog() {
  const [selectedBlog, setSelectedBlog] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');

  const blogPosts = [
    {
      id: 1,
      title: "Cloud Hosting vs Shared Hosting: Which is Best?",
      excerpt: "One of the most important decisions for your online success is choosing the right hosting solution...",
      date: "November 12, 2025",
      author: "PRK TECH",
      category: "Cloud Technology",
      image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop",
      icon: <Globe className="w-6 h-6" />,
      content: `
        <h2>Introduction</h2>
        <p>One of the most important decisions for your online success is choosing the right hosting solution. Cloud hosting and shared hosting represent two fundamentally different approaches to web hosting, each with distinct advantages and ideal use cases.</p>
        
        <h2>What is Shared Hosting?</h2>
        <p>Shared hosting is like living in an apartment building - multiple websites share the same server resources including CPU, RAM, and disk space. It's the most economical option for beginners and small websites.</p>
        
        <h3>Pros of Shared Hosting:</h3>
        <ul>
          <li>Most affordable hosting option</li>
          <li>Easy to set up and manage</li>
          <li>No technical knowledge required</li>
          <li>Ideal for small websites and blogs</li>
        </ul>
        
        <h3>Cons of Shared Hosting:</h3>
        <ul>
          <li>Limited resources and performance</li>
          <li>Security risks from neighboring sites</li>
          <li>Less control over server configuration</li>
          <li>Traffic spikes can affect your site</li>
        </ul>
        
        <h2>What is Cloud Hosting?</h2>
        <p>Cloud hosting uses multiple servers working together as one system. Your website can draw resources from a network of servers, providing better reliability and scalability.</p>
        
        <h3>Pros of Cloud Hosting:</h3>
        <ul>
          <li>Excellent scalability and flexibility</li>
          <li>High reliability and uptime</li>
          <li>Pay only for resources you use</li>
          <li>Better performance during traffic spikes</li>
          <li>Enhanced security features</li>
        </ul>
        
        <h3>Cons of Cloud Hosting:</h3>
        <ul>
          <li>More expensive than shared hosting</li>
          <li>Can be complex to manage</li>
          <li>Costs can vary based on usage</li>
        </ul>
        
        <h2>Which Should You Choose?</h2>
        <p>Choose <strong>Shared Hosting</strong> if you're starting a personal blog, small business website, or portfolio site with predictable traffic.</p>
        <p>Choose <strong>Cloud Hosting</strong> if you're running an e-commerce site, expecting high traffic, need guaranteed uptime, or require scalability for growth.</p>
        
        <h2>Conclusion</h2>
        <p>Your choice between cloud and shared hosting should align with your website's current needs and future growth plans. While shared hosting offers an affordable entry point, cloud hosting provides the scalability and reliability that growing businesses require.</p>
      `
    },
    {
      id: 2,
      title: "Top AI Visibility Tools in 2026",
      excerpt: "The importance of digital visibility in 2026 goes beyond Google's traditional search engine result pages...",
      date: "November 12, 2025",
      author: "Zinavo",
      category: "AI & Technology",
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=2070&auto=format&fit=crop",
      icon: <Zap className="w-6 h-6" />,
      content: `
        <h2>Introduction</h2>
        <p>The importance of digital visibility in 2026 goes beyond Google's traditional search engine result pages. AI-powered search and discovery platforms are revolutionizing how users find content, making AI visibility tools essential for modern digital marketing strategies.</p>
        
        <h2>Why AI Visibility Matters</h2>
        <p>AI-powered platforms like ChatGPT, Perplexity, and others are changing how people search for information. Your content needs to be optimized for AI discovery, not just traditional search engines.</p>
        
        <h2>Top AI Visibility Tools</h2>
        
        <h3>1. AI Content Optimization Platforms</h3>
        <p>These tools help optimize your content for AI language models, ensuring your brand appears in AI-generated responses.</p>
        
        <h3>2. Semantic Analysis Tools</h3>
        <p>Understand how AI interprets your content and identify opportunities to improve semantic relevance.</p>
        
        <h3>3. AI Citation Trackers</h3>
        <p>Monitor when and where AI platforms reference your content, giving you insights into your AI visibility performance.</p>
        
        <h3>4. Natural Language Processing Analyzers</h3>
        <p>Ensure your content uses language patterns that AI models recognize and value.</p>
        
        <h3>5. Knowledge Graph Optimization Tools</h3>
        <p>Help structure your content to appear in knowledge graphs and entity-based search results.</p>
        
        <h2>Implementation Strategy</h2>
        <p>Successful AI visibility requires a multi-faceted approach:</p>
        <ul>
          <li>Create comprehensive, authoritative content</li>
          <li>Use clear, natural language</li>
          <li>Structure information logically</li>
          <li>Build strong entity associations</li>
          <li>Maintain consistent brand mentions</li>
        </ul>
        
        <h2>Conclusion</h2>
        <p>AI visibility is no longer optional - it's essential for staying competitive in 2026. By leveraging these tools and strategies, you can ensure your brand remains discoverable in the age of AI-powered search.</p>
      `
    },
    {
      id: 3,
      title: "When and How to Redesign Your Website: A Step-by-Step Checklist",
      excerpt: "A website represents your brand and promotes trust which helps you attract new customers...",
      date: "November 12, 2025",
      author: "Zinavo",
      category: "Web Design",
      image: "https://images.unsplash.com/photo-1559028012-481c04fa702d?q=80&w=2036&auto=format&fit=crop",
      icon: <Palette className="w-6 h-6" />,
      content: `
        <h2>Introduction</h2>
        <p>A website represents your brand and promotes trust which helps you attract new customers. However, even the best websites need periodic updates to stay relevant, functional, and competitive.</p>
        
        <h2>Signs You Need a Website Redesign</h2>
        
        <h3>1. Outdated Design</h3>
        <p>If your website looks like it's from 2010, it's time for a refresh. Modern users expect contemporary design that reflects current trends.</p>
        
        <h3>2. Poor Mobile Experience</h3>
        <p>With mobile traffic exceeding desktop, a non-responsive design is a major liability.</p>
        
        <h3>3. Low Conversion Rates</h3>
        <p>If visitors aren't taking desired actions, your design might be the culprit.</p>
        
        <h3>4. Slow Loading Times</h3>
        <p>Page speed is crucial for both user experience and SEO. Slow sites lose visitors.</p>
        
        <h3>5. High Bounce Rates</h3>
        <p>If people leave quickly, your site isn't engaging them effectively.</p>
        
        <h2>Step-by-Step Redesign Checklist</h2>
        
        <h3>Phase 1: Research & Planning</h3>
        <ul>
          <li>Audit current website performance</li>
          <li>Analyze user behavior and feedback</li>
          <li>Research competitor websites</li>
          <li>Define clear goals and KPIs</li>
          <li>Create user personas</li>
          <li>Establish budget and timeline</li>
        </ul>
        
        <h3>Phase 2: Strategy & Information Architecture</h3>
        <ul>
          <li>Map out site structure</li>
          <li>Plan navigation hierarchy</li>
          <li>Create content strategy</li>
          <li>Define conversion paths</li>
          <li>Plan for SEO preservation</li>
        </ul>
        
        <h3>Phase 3: Design</h3>
        <ul>
          <li>Create wireframes</li>
          <li>Develop visual mockups</li>
          <li>Design responsive layouts</li>
          <li>Establish brand guidelines</li>
          <li>Get stakeholder approval</li>
        </ul>
        
        <h3>Phase 4: Development</h3>
        <ul>
          <li>Set up development environment</li>
          <li>Build responsive templates</li>
          <li>Integrate CMS</li>
          <li>Implement SEO best practices</li>
          <li>Add analytics tracking</li>
        </ul>
        
        <h3>Phase 5: Testing</h3>
        <ul>
          <li>Cross-browser testing</li>
          <li>Mobile device testing</li>
          <li>Performance optimization</li>
          <li>Accessibility compliance</li>
          <li>User acceptance testing</li>
        </ul>
        
        <h3>Phase 6: Launch & Post-Launch</h3>
        <ul>
          <li>Set up 301 redirects</li>
          <li>Deploy to production</li>
          <li>Monitor performance metrics</li>
          <li>Gather user feedback</li>
          <li>Make iterative improvements</li>
        </ul>
        
        <h2>Conclusion</h2>
        <p>A website redesign is a significant investment, but when done strategically, it can dramatically improve your online presence, user engagement, and business results. Use this checklist to ensure a smooth, successful redesign process.</p>
      `
    },
    {
      id: 4,
      title: "Case Study: How We Improved a Website's Speed by 98%",
      excerpt: "Website speed is an important factor in user satisfaction, SEO performance and overall business success...",
      date: "October 28, 2025",
      author: "Zinavo",
      category: "Performance",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop",
      icon: <TrendingUp className="w-6 h-6" />,
      content: `
        <h2>Introduction</h2>
        <p>Website speed is an important factor in user satisfaction, SEO performance and overall business success. In this case study, we'll walk you through how we achieved a 98% speed improvement for a client's website.</p>
        
        <h2>The Challenge</h2>
        <p>Our client, an e-commerce business, was experiencing:</p>
        <ul>
          <li>Page load times of 8-12 seconds</li>
          <li>High bounce rates (78%)</li>
          <li>Poor mobile performance</li>
          <li>Low conversion rates</li>
          <li>Negative impact on SEO rankings</li>
        </ul>
        
        <h2>Initial Analysis</h2>
        <p>We conducted a comprehensive audit that revealed:</p>
        <ul>
          <li>Unoptimized images (5+ MB files)</li>
          <li>No caching implementation</li>
          <li>Render-blocking JavaScript and CSS</li>
          <li>No CDN usage</li>
          <li>Inefficient database queries</li>
          <li>Too many HTTP requests (150+)</li>
        </ul>
        
        <h2>Our Solution Strategy</h2>
        
        <h3>1. Image Optimization</h3>
        <p>We implemented comprehensive image optimization:</p>
        <ul>
          <li>Converted images to WebP format</li>
          <li>Implemented lazy loading</li>
          <li>Used responsive images with srcset</li>
          <li>Compressed all images without quality loss</li>
        </ul>
        <p><strong>Result:</strong> 85% reduction in image file sizes</p>
        
        <h3>2. Caching Implementation</h3>
        <ul>
          <li>Browser caching for static assets</li>
          <li>Server-side caching with Redis</li>
          <li>Database query caching</li>
          <li>Object caching for dynamic content</li>
        </ul>
        <p><strong>Result:</strong> 70% faster repeat visits</p>
        
        <h3>3. Code Optimization</h3>
        <ul>
          <li>Minified CSS and JavaScript</li>
          <li>Removed unused code</li>
          <li>Deferred non-critical JavaScript</li>
          <li>Inlined critical CSS</li>
          <li>Combined multiple files</li>
        </ul>
        <p><strong>Result:</strong> Reduced HTTP requests by 60%</p>
        
        <h3>4. CDN Implementation</h3>
        <ul>
          <li>Deployed global CDN</li>
          <li>Configured edge caching</li>
          <li>Optimized asset delivery</li>
        </ul>
        <p><strong>Result:</strong> 40% faster global load times</p>
        
        <h3>5. Database Optimization</h3>
        <ul>
          <li>Optimized slow queries</li>
          <li>Added proper indexing</li>
          <li>Implemented connection pooling</li>
          <li>Cleaned up database tables</li>
        </ul>
        <p><strong>Result:</strong> 80% faster query execution</p>
        
        <h2>The Results</h2>
        
        <h3>Performance Metrics:</h3>
        <ul>
          <li><strong>Page Load Time:</strong> 8-12s → 0.24s (98% improvement)</li>
          <li><strong>First Contentful Paint:</strong> 4.2s → 0.8s</li>
          <li><strong>Time to Interactive:</strong> 9.1s → 1.2s</li>
          <li><strong>Total Page Size:</strong> 8.4MB → 1.2MB</li>
        </ul>
        
        <h3>Business Impact:</h3>
        <ul>
          <li>Bounce rate decreased from 78% to 32%</li>
          <li>Conversion rate increased by 145%</li>
          <li>Mobile users increased by 89%</li>
          <li>SEO rankings improved (15 positions average)</li>
          <li>Revenue increased by 67%</li>
        </ul>
        
        <h2>Key Takeaways</h2>
        <ol>
          <li>Website speed directly impacts business metrics</li>
          <li>Image optimization offers the quickest wins</li>
          <li>Caching is essential for performance</li>
          <li>Continuous monitoring prevents regression</li>
          <li>Small improvements compound significantly</li>
        </ol>
        
        <h2>Conclusion</h2>
        <p>Improving website speed requires a comprehensive, multi-faceted approach. By systematically addressing each performance bottleneck, we achieved dramatic improvements that translated directly to business success. The investment in performance optimization paid for itself within the first month through increased conversions alone.</p>
      `
    },
    {
      id: 5,
      title: "Responsive Web Design: How to Make Websites Mobile-Friendly",
      excerpt: "Web developers use responsive web design to ensure that their websites automatically adjust their layout...",
      date: "October 28, 2025",
      author: "Zinavo",
      category: "Web Design",
      image: "https://images.unsplash.com/photo-1547658719-da2b51169166?q=80&w=2064&auto=format&fit=crop",
      icon: <Smartphone className="w-6 h-6" />,
      content: `
        <h2>Introduction</h2>
        <p>Web developers use responsive web design to ensure that their websites automatically adjust their layout and content based on the device and screen size being used. With mobile traffic now exceeding desktop, responsive design isn't optional—it's essential.</p>
        
        <h2>Why Responsive Design Matters</h2>
        <ul>
          <li>Over 60% of web traffic comes from mobile devices</li>
          <li>Google uses mobile-first indexing for SEO</li>
          <li>Users expect seamless experiences across devices</li>
          <li>Single codebase reduces maintenance costs</li>
          <li>Improved user engagement and conversions</li>
        </ul>
        
        <h2>Core Principles of Responsive Design</h2>
        
        <h3>1. Fluid Grid Layouts</h3>
        <p>Use percentage-based widths instead of fixed pixels. This allows content to resize proportionally across different screen sizes.</p>
        <pre><code>/* Fixed width - Not responsive */
.container { width: 960px; }

/* Fluid width - Responsive */
.container { width: 90%; max-width: 1200px; }</code></pre>
        
        <h3>2. Flexible Images</h3>
        <p>Images should scale within their containing elements to prevent overflow on smaller screens.</p>
        <pre><code>img {
  max-width: 100%;
  height: auto;
}</code></pre>
        
        <h3>3. Media Queries</h3>
        <p>Apply different styles based on device characteristics like screen width, orientation, and resolution.</p>
        <pre><code>/* Mobile styles by default */
.sidebar { width: 100%; }

/* Tablet and up */
@media (min-width: 768px) {
  .sidebar { width: 30%; }
}

/* Desktop */
@media (min-width: 1024px) {
  .sidebar { width: 25%; }
}</code></pre>
        
        <h2>Mobile-First Approach</h2>
        <p>Start designing for mobile devices first, then progressively enhance for larger screens. This ensures optimal mobile performance.</p>
        
        <h3>Benefits of Mobile-First:</h3>
        <ul>
          <li>Forces focus on essential content</li>
          <li>Better performance on mobile devices</li>
          <li>Easier to scale up than scale down</li>
          <li>Aligns with mobile-first indexing</li>
        </ul>
        
        <h2>Common Breakpoints</h2>
        <ul>
          <li><strong>Mobile:</strong> 320px - 480px</li>
          <li><strong>Tablet:</strong> 481px - 768px</li>
          <li><strong>Small Desktop:</strong> 769px - 1024px</li>
          <li><strong>Large Desktop:</strong> 1025px+</li>
        </ul>
        
        <h2>Best Practices</h2>
        
        <h3>Navigation</h3>
        <ul>
          <li>Use hamburger menus for mobile</li>
          <li>Ensure touch targets are at least 44x44px</li>
          <li>Keep navigation simple and intuitive</li>
        </ul>
        
        <h3>Typography</h3>
        <ul>
          <li>Use relative units (em, rem) for font sizes</li>
          <li>Ensure text is readable without zooming (minimum 16px)</li>
          <li>Adjust line height for mobile readability</li>
        </ul>
        
        <h3>Forms</h3>
        <ul>
          <li>Use appropriate input types for mobile keyboards</li>
          <li>Make form fields large enough for easy tapping</li>
          <li>Minimize required fields</li>
          <li>Use autofill attributes</li>
        </ul>
        
        <h3>Performance</h3>
        <ul>
          <li>Optimize images for different screen sizes</li>
          <li>Lazy load images and content</li>
          <li>Minimize CSS and JavaScript</li>
          <li>Use browser caching</li>
        </ul>
        
        <h2>Testing Your Responsive Design</h2>
        <ul>
          <li>Test on real devices, not just emulators</li>
          <li>Check various screen sizes and orientations</li>
          <li>Test touch interactions</li>
          <li>Verify performance on mobile networks</li>
          <li>Use tools like Google Mobile-Friendly Test</li>
        </ul>
        
        <h2>Common Mistakes to Avoid</h2>
        <ol>
          <li>Forgetting to set the viewport meta tag</li>
          <li>Using fixed width elements</li>
          <li>Not testing on actual devices</li>
          <li>Hiding important content on mobile</li>
          <li>Ignoring touch target sizes</li>
          <li>Overlooking landscape orientation</li>
        </ol>
        
        <h2>Conclusion</h2>
        <p>Responsive web design is fundamental to modern web development. By following these principles and best practices, you can create websites that provide excellent user experiences across all devices, improve your SEO performance, and increase engagement and conversions.</p>
      `
    },
    {
      id: 6,
      title: "Best Front-End Frameworks in 2025: React, Angular, Vue Compared",
      excerpt: "Powerful frameworks continue to shape front-end development in 2025, helping developers build dynamic, scalable applications...",
      date: "October 6, 2025",
      author: "Zinavo",
      category: "Development",
      image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?q=80&w=2070&auto=format&fit=crop",
      icon: <Code className="w-6 h-6" />,
      content: `
        <h2>Introduction</h2>
        <p>Powerful frameworks continue to shape front-end development in 2025, helping developers build dynamic, scalable applications efficiently. React, Angular, and Vue remain the top choices, each with distinct strengths. Let's compare them to help you choose the right framework for your project.</p>
        
        <h2>React</h2>
        
        <h3>Overview</h3>
        <p>Developed by Meta (Facebook), React is a JavaScript library focused on building user interfaces through reusable components. While technically a library rather than a full framework, its ecosystem makes it a complete solution.</p>
        
        <h3>Key Features</h3>
        <ul>
          <li><strong>Virtual DOM:</strong> Efficient updates and rendering</li>
          <li><strong>Component-Based:</strong> Reusable, modular code</li>
          <li><strong>One-Way Data Flow:</strong> Predictable state management</li>
          <li><strong>JSX Syntax:</strong> HTML-like syntax in JavaScript</li>
          <li><strong>Rich Ecosystem:</strong> Extensive third-party libraries</li>
        </ul>
        
        <h3>Pros</h3>
        <ul>
          <li>Largest community and job market</li>
          <li>Flexible and unopinionated</li>
          <li>React Native for mobile development</li>
          <li>Excellent performance with concurrent rendering</li>
          <li>Strong corporate backing</li>
        </ul>
        
        <h3>Cons</h3>
        <ul>
          <li>Steep learning curve for beginners</li>
          <li>Requires additional libraries for routing, state management</li>
          <li>Fast-paced updates can cause compatibility issues</li>
          <li>JSX syntax may feel unusual initially</li>
        </ul>
        
        <h3>Best For</h3>
        <ul>
          <li>Large-scale applications</li>
          <li>Projects requiring flexibility</li>
          <li>Teams with React expertise</li>
          <li>Apps needing cross-platform mobile versions</li>
        </ul>
        
        <h2>Angular</h2>
        
        <h3>Overview</h3>
        <p>Developed by Google, Angular is a complete, opinionated framework that provides everything needed for enterprise-level applications out of the box.</p>
        
        <h3>Key Features</h3>
        <ul>
          <li><strong>TypeScript:</strong> Built-in type safety</li>
          <li><strong>Two-Way Data Binding:</strong> Automatic synchronization</li>
          <li><strong>Dependency Injection:</strong> Clean, testable code</li>
          <li><strong>CLI Tools:</strong> Powerful development tools</li>
          <li><strong>Complete Solution:</strong> Routing, forms, HTTP client included</li>
        </ul>
        
        <h3>Pros</h3>
        <ul>
          <li>Complete framework with all features included</li>
          <li>Strong typing with TypeScript</li>
          <li>Excellent for large enterprise applications</li>
          <li>Comprehensive documentation</li>
          <li>Built-in testing utilities</li>
          <li>Google's backing ensures longevity</li>
        </ul>
        
        <h3>Cons</h3>
        <ul>
          <li>Steepest learning curve</li>
          <li>More verbose code</li>
          <li>Larger bundle size</li>
          <li>Opinionated structure can feel restrictive</li>
          <li>Breaking changes between major versions</li>
        </ul>
        
        <h3>Best For</h3>
        <ul>
          <li>Enterprise applications</li>
          <li>Projects requiring strict structure</li>
          <li>Teams familiar with TypeScript</li>
          <li>Long-term, maintained applications</li>
        </ul>
        
        <h2>Vue.js</h2>
        
        <h3>Overview</h3>
        <p>Vue is a progressive framework that can be adopted incrementally. It combines the best features of React and Angular while maintaining simplicity and flexibility.</p>
        
        <h3>Key Features</h3>
        <ul>
          <li><strong>Template Syntax:</strong> HTML-based templates</li>
          <li><strong>Reactive Data Binding:</strong> Efficient updates</li>
          <li><strong>Component System:</strong> Reusable components</li>
          <li><strong>Composition API:</strong> Flexible code organization</li>
          <li><strong>Progressive:</strong> Can be adopted gradually</li>
        </ul>
        
        <h3>Pros</h3>
        <ul>
          <li>Easiest to learn</li>
          <li>Excellent documentation</li>
          <li>Smaller bundle size</li>
          <li>Great performance</li>
          <li>Flexible and intuitive</li>
          <li>Strong community in Asia</li>
        </ul>
        
        <h3>Cons</h3>
        <ul>
          <li>Smaller ecosystem than React</li>
          <li>Less corporate backing</li>
          <li>Fewer job opportunities in some regions</li>
          <li>Language barrier in some community resources</li>
        </ul>
        
        <h3>Best For</h3>
        <ul>
          <li>Small to medium projects</li>
          <li>Rapid prototyping</li>
          <li>Teams new to modern frameworks</li>
          <li>Projects needing gradual adoption</li>
        </ul>
        
        <h2>Performance Comparison</h2>
        
        <table>
          <tr>
            <th>Metric</th>
            <th>React</th>
            <th>Angular</th>
            <th>Vue</th>
          </tr>
          <tr>
            <td>Bundle Size</td>
            <td>~45KB</td>
            <td>~150KB</td>
            <td>~35KB</td>
          </tr>
          <tr>
            <td>Performance</td>
            <td>Excellent</td>
            <td>Good</td>
            <td>Excellent</td>
          </tr>
          <tr>
            <td>Learning Curve</td>
            <td>Moderate</td>
            <td>Steep</td>
            <td>Gentle</td>
          </tr>
          <tr>
            <td>Community Size</td>
            <td>Largest</td>
            <td>Large</td>
            <td>Medium</td>
          </tr>
        </table>
        
        <h2>Which Should You Choose?</h2>
        
        <p><strong>Choose React if:</strong></p>
        <ul>
          <li>You want maximum flexibility</li>
          <li>You need the largest job market</li>
          <li>You're building a mobile app too</li>
          <li>You prefer a component-centric approach</li>
        </ul>
        
        <p><strong>Choose Angular if:</strong></p>
        <ul>
          <li>You're building enterprise applications</li>
          <li>You prefer a complete, opinionated framework</li>
          <li>Your team knows TypeScript</li>
          <li>You need built-in solutions for everything</li>
        </ul>
        
        <p><strong>Choose Vue if:</strong></p>
        <ul>
          <li>You want the easiest learning curve</li>
          <li>You're building a small to medium project</li>
          <li>You value simplicity and flexibility</li>
          <li>You want to adopt a framework gradually</li>
        </ul>
        
        <h2>Conclusion</h2>
        <p>There's no universally "best" framework—the right choice depends on your project requirements, team expertise, and specific use case. React dominates the job market, Angular excels for enterprise applications, and Vue offers the best balance of simplicity and power. All three are excellent choices that will serve you well in 2025 and beyond.</p>
      `
    }
  ];

  const categories = ["All", ...new Set(blogPosts.map(post => post.category))];
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredPosts = blogPosts.filter(post => {
    const matchesCategory = selectedCategory === "All" || post.category === selectedCategory;
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  if (selectedBlog) {
    return (
      <div className="w-full overflow-x-hidden">
        <Title>{selectedBlog.title} | PRK Blog</Title>
        <Meta name="description" content={selectedBlog.excerpt} />
        
        {/* Blog Detail View */}
        <article className="min-h-screen bg-white">
          {/* Hero Section */}
          <div className="relative h-96 overflow-hidden">
            <img
              src={selectedBlog.image}
              alt={selectedBlog.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
            
            <div className="absolute inset-0 flex items-end">
              <div className="max-w-4xl mx-auto px-8 pb-12 w-full">
                <button
                  onClick={() => setSelectedBlog(null)}
                  className="flex items-center gap-2 text-white mb-6 hover:text-orange-400 transition-colors"
                >
                  <ChevronLeft className="w-5 h-5" />
                  Back to Blog
                </button>
                
                <div className="flex items-center gap-4 mb-4">
                  <span className="px-4 py-1 bg-orange-500 text-white text-sm font-bold rounded-full">
                    {selectedBlog.category}
                  </span>
                  <div className="flex items-center gap-2 text-white/80">
                    <Calendar className="w-4 h-4" />
                    <span>{selectedBlog.date}</span>
                  </div>
                  <div className="flex items-center gap-2 text-white/80">
                    <User className="w-4 h-4" />
                    <span>{selectedBlog.author}</span>
                  </div>
                </div>
                
                <h1
                  className="text-4xl md:text-5xl font-bold text-white leading-tight"
                  style={{ fontFamily: "Sigmar One, sans-serif" }}
                >
                  {selectedBlog.title}
                </h1>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="max-w-4xl mx-auto px-8 py-16">
            <div 
              className="prose prose-lg max-w-none"
              dangerouslySetInnerHTML={{ __html: selectedBlog.content }}
              style={{
                fontFamily: "Open Sans, sans-serif"
              }}
            />

            {/* Share Section */}
            <div className="mt-16 pt-8 border-t border-gray-200">
              <h3 className="text-2xl font-bold text-blue-900 mb-6">Share this article</h3>
              <div className="flex gap-4">
                <button className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                  Share on LinkedIn
                </button>
                <button className="px-6 py-3 bg-blue-400 text-white rounded-lg hover:bg-blue-500 transition-colors">
                  Share on Twitter
                </button>
                <button className="px-6 py-3 bg-blue-900 text-white rounded-lg hover:bg-blue-800 transition-colors">
                  Share on Facebook
                </button>
              </div>
            </div>

            {/* Related Posts */}
            <div className="mt-16 pt-8 border-t border-gray-200">
              <h3 className="text-2xl font-bold text-blue-900 mb-8">Related Articles</h3>
              <div className="grid md:grid-cols-2 gap-8">
                {blogPosts
                  .filter(post => post.id !== selectedBlog.id && post.category === selectedBlog.category)
                  .slice(0, 2)
                  .map(post => (
                    <div
                      key={post.id}
                      onClick={() => setSelectedBlog(post)}
                      className="group cursor-pointer"
                    >
                      <div className="relative h-48 rounded-xl overflow-hidden mb-4">
                        <img
                          src={post.image}
                          alt={post.title}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                      </div>
                      <h4 className="text-xl font-bold text-blue-900 group-hover:text-orange-500 transition-colors mb-2">
                        {post.title}
                      </h4>
                      <p className="text-gray-600 line-clamp-2">{post.excerpt}</p>
                    </div>
                  ))}
              </div>
            </div>
          </div>
        </article>

        <style>{`
          .prose h2 {
            font-size: 2rem;
            font-weight: bold;
            color: #1e3a8a;
            margin-top: 2.5rem;
            margin-bottom: 1rem;
          }
          .prose h3 {
            font-size: 1.5rem;
            font-weight: bold;
            color: #1e40af;
            margin-top: 2rem;
            margin-bottom: 0.75rem;
          }
          .prose p {
            margin-bottom: 1.25rem;
            line-height: 1.8;
            color: #374151;
          }
          .prose ul, .prose ol {
            margin-bottom: 1.25rem;
            padding-left: 1.5rem;
          }
          .prose li {
            margin-bottom: 0.5rem;
            color: #4b5563;
          }
          .prose strong {
            color: #1f2937;
            font-weight: 600;
          }
          .prose pre {
            background: #1e293b;
            color: #e2e8f0;
            padding: 1.5rem;
            border-radius: 0.5rem;
            overflow-x: auto;
            margin: 1.5rem 0;
          }
          .prose code {
            background: #f1f5f9;
            color: #e11d48;
            padding: 0.25rem 0.5rem;
            border-radius: 0.25rem;
            font-size: 0.875rem;
          }
          .prose pre code {
            background: transparent;
            color: #e2e8f0;
            padding: 0;
          }
          .prose table {
            width: 100%;
            border-collapse: collapse;
            margin: 2rem 0;
          }
          .prose th, .prose td {
            border: 1px solid #e5e7eb;
            padding: 0.75rem;
            text-align: left;
          }
          .prose th {
            background: #f3f4f6;
            font-weight: 600;
            color: #1f2937;
          }
          .line-clamp-2 {
            display: -webkit-box;
            -webkit-line-clamp: 2;
            -webkit-box-orient: vertical;
            overflow: hidden;
          }
        `}</style>
      </div>
    );
  }

  return (
    <div className="w-full overflow-x-hidden">
      <Title>Our Blog | Creative Communications</Title>
      <Meta name="description" content="Stay updated with the latest trends in web design, development, SEO, and digital marketing." />
      
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1499750310107-5fef28a66643?q=80&w=2070&auto=format&fit=crop"
            alt="Blog"
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-blue-900/90 via-blue-800/85 to-orange-900/90" />
        </div>

        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute w-96 h-96 bg-blue-300/20 rounded-full blur-3xl -top-48 -left-48 animate-pulse" />
          <div className="absolute w-96 h-96 bg-orange-300/25 rounded-full blur-3xl top-1/2 right-0 animate-pulse delay-1000" />
        </div>

        <div className="relative z-10 w-full px-8 py-12">
          <div className="max-w-5xl mx-auto text-center space-y-6">
            <h1
              className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight"
              style={{ fontFamily: "Sigmar One, sans-serif" }}
            >
              <span className="text-white drop-shadow-lg">Our </span>
              <span className="bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text text-transparent drop-shadow-lg">
                Blog
              </span>
            </h1>
            <p className="text-xl text-white leading-relaxed max-w-3xl mx-auto">
              Stay updated with latest technologies, tools, and trends in web design, 
              development, SEO, and digital marketing
            </p>

            {/* Search Bar */}
            <div className="max-w-2xl mx-auto mt-8">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search articles..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-12 pr-4 py-4 rounded-full border-2 border-white/20 bg-white/10 backdrop-blur-sm text-white placeholder-white/60 focus:outline-none focus:border-orange-400 transition-all"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="bg-white py-8 sticky top-0 z-20 shadow-md">
        <div className="max-w-7xl mx-auto px-8">
          <div className="flex flex-wrap gap-3 justify-center">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-2 rounded-full font-bold transition-all duration-300 ${
                  selectedCategory === category
                    ? 'bg-gradient-to-r from-orange-500 to-orange-600 text-white shadow-lg'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-8">
          {filteredPosts.length === 0 ? (
            <div className="text-center py-20">
              <p className="text-2xl text-gray-600">No articles found matching your search.</p>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredPosts.map((post) => (
                <article
                  key={post.id}
                  onClick={() => setSelectedBlog(post)}
                  className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer hover:-translate-y-2"
                >
                  {/* Image */}
                  <div className="relative h-56 overflow-hidden">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                    <div className="absolute top-4 left-4">
                      <span className="px-4 py-1 bg-orange-500 text-white text-sm font-bold rounded-full flex items-center gap-2">
                        {post.icon}
                        {post.category}
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    {/* Meta */}
                    <div className="flex items-center gap-4 text-sm text-gray-500 mb-3">
                      <div className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        <span>{post.date}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <User className="w-4 h-4" />
                        <span>{post.author}</span>
                      </div>
                    </div>

                    {/* Title */}
                    <h2 className="text-xl font-bold text-blue-900 mb-3 group-hover:text-orange-500 transition-colors line-clamp-2">
                      {post.title}
                    </h2>

                    {/* Excerpt */}
                    <p className="text-gray-600 mb-4 line-clamp-3">
                      {post.excerpt}
                    </p>

                    {/* Read More */}
                    <div className="flex items-center text-orange-500 font-bold group-hover:gap-3 gap-2 transition-all">
                      <span>Read More</span>
                      <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </article>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-blue-900 to-orange-900 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute w-96 h-96 bg-orange-300 rounded-full blur-3xl top-0 left-0" />
          <div className="absolute w-96 h-96 bg-blue-300 rounded-full blur-3xl bottom-0 right-0" />
        </div>
        
        <div className="max-w-4xl mx-auto px-8 text-center relative z-10">
          <h2
            className="text-4xl sm:text-5xl font-bold text-white mb-6"
            style={{ fontFamily: "Sigmar One, sans-serif" }}
          >
            Want to Stay Updated?
          </h2>
          <p className="text-xl text-white/90 mb-8 leading-relaxed">
            Subscribe to our newsletter and get the latest insights delivered to your inbox
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-xl mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-6 py-4 rounded-full focus:outline-none focus:ring-2 focus:ring-orange-400"
            />
            <button
              className="px-8 py-4 bg-gradient-to-r from-orange-500 to-orange-600 text-white font-bold rounded-full hover:scale-105 transition-all duration-300 hover:shadow-2xl"
              style={{ fontFamily: "Sigmar One, sans-serif" }}
            >
              Subscribe
            </button>
          </div>
        </div>
      </section>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Sigmar+One&family=Open+Sans:wght@400;500;600;700&display=swap');

        @keyframes pulse {
          0%, 100% {
            opacity: 0.6;
          }
          50% {
            opacity: 0.8;
          }
        }

        .delay-1000 {
          animation-delay: 1s;
        }

        .line-clamp-2 {
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }

        .line-clamp-3 {
          display: -webkit-box;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `}</style>
    </div>
  );
}
export default Blog;