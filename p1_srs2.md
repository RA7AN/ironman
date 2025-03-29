### **Product Requirements Document (PRD)**

#### **Project Name: Iron-man Laundry Subscription Service**

#### **Category: E-commerce and Business Applications**

#### **Submission Deadline: 11:59 PM 29 March 2025**

#### **Deployment Platform: Vercel**

#### **Date: March 28, 2025**

---

### **1\. Project Overview**

#### **1.1 Description**

"Iron-man" is a subscription-based, on-demand laundry service app that connects users to local laundries and professional ironing services. It offers doorstep pickup and drop-off, subscription plans for regular users, and a seamless user experience with a modern, visually stunning frontend. The app aims to simplify laundry management while delighting users with an innovative and beautiful UI.

#### **1.2 Goal**

Create a **functional and beautiful** frontend app for the hackathon that:

* Provides intuitive navigation and flow (User Experience).  
* Features a cohesive, aesthetically pleasing design with gradients and glow effects (Visual Design).  
* Introduces unique elements like a dynamic island laundry status (Originality).  
* Delivers a polished, working mini-app hosted on Vercel (Presentation).

#### **1.3 Target Audience**

* Busy professionals, students, and families who need convenient laundry solutions.  
* Tech-savvy users who appreciate modern UI design.

---

### **2\. Functional Requirements**

#### **2.1 Core Features**

1. **Landing Page**  
   * Hero section with a catchy tagline (e.g., "Laundry, Delivered Like Magic").  
   * Call-to-action (CTA) buttons: "Get Started" and "View Plans".  
   * Visuals with gradient backgrounds and subtle animations.  
2. **Subscription Plans Page**  
   * Display 3-4 pricing tiers (e.g., Basic, Pro, Premium) with mock data.  
   * Each plan card uses gradient backgrounds and glow-on-hover effects on the "Subscribe" button.  
   * Highlight the recommended plan with a distinct visual cue (e.g., a glowing border).  
3. **Signup/Registration Page**  
   * Form fields: Name, Email, Phone, Address (for pickup/drop-off).  
   * Gradient-styled input fields and a glowing "Sign Up" button on hover.  
   * Simple validation (e.g., email format) using mock data (no backend).  
4. **About Page**  
   * Brief description of the service and its mission.  
   * Team section (mock data) with gradient-bordered cards.  
   * Contact info or mock form.  
5. **Location Tracker**  
   * Fixed header element showing the user’s mock location (e.g., "Pickup from: 123 Main St").  
   * Gradient-styled bar with a subtle glow effect.  
6. **Dynamic Island Laundry Status**  
   * Floating UI element (inspired by Apple’s Dynamic Island) showing mock laundry status (e.g., "In Progress", "Out for Delivery").  
   * Expands on hover/click to show details (e.g., estimated delivery time).  
   * Uses gradients and smooth animations for transitions.  
7. **Order Placement Flow**  
   * Simple form to "place an order" (mock data): Select items, pickup time, and plan.  
   * Glow-on-hover buttons for "Confirm Order".

#### **2.2 Pages**

* Landing Page  
* Subscription Plans  
* Signup/Registration  
* About  
* Order Placement (optional stretch goal for better UX).

#### **2.3 Non-Functional Requirements**

* Responsive design for mobile, tablet, and desktop.  
* Fast load times (optimized assets and minimal JS).  
* Browser compatibility (Chrome, Firefox, Safari).

---

### **3\. UI/UX Design Requirements**

#### **3.1 Visual Design**

* **Color Scheme**: Bold gradients (e.g., blue-to-purple, green-to-teal) for backgrounds, buttons, and cards.  
  * **Light Mode**: Bright base tones (e.g., white or light gray) with vibrant gradients (e.g., \#00C4B4 to \#8B5CF6).  
  * **Dark Mode**: Dark base tones (e.g., deep gray or black) with complementary gradients (e.g., \#2DD4BF to \#A78BFA).  
* **Typography**: Modern sans-serif fonts (e.g., Poppins, Inter) for readability and style.  
* **Glow-on-Hover**: Subtle glowing effect on buttons and interactive elements using CSS (box-shadow, transform), adjusted for visibility in both light and dark modes.  
* **Dynamic Island**: Rounded, floating element with gradient fill and smooth scaling animations, with contrasting text colors per mode.  
* **Light/Dark Mode Toggle**:  
  * A toggle button (e.g., sun/moon icon) in the header or settings area.  
  * Smooth transition between modes (e.g., 0.3s fade).  
  * Colors adapt dynamically to maintain readability and aesthetic harmony (e.g., light text on dark backgrounds, dark text on light backgrounds).

#### **3.2 User Experience**

* Intuitive navigation with a sticky header (Home, Plans, About, Sign Up).  
* Smooth transitions between pages using a frontend framework.  
* Clear hierarchy with CTAs standing out via size and glow effects.  
* Mode toggle is easily accessible and persists across page refreshes (using local storage).

#### **3.3 Originality**

* The "Dynamic Island" laundry status is a standout feature, blending functionality with a trendy UI concept.  
* Gradient-heavy design paired with glow effects creates a futuristic, superhero-inspired vibe (nod to "Iron-man").  
* Light/dark mode toggle enhances usability and showcases attention to detail.

---

### **4\. Tech Stack Recommendation**

#### **4.1 Rationale**

For a hackathon, we need a stack that’s fast to develop, supports modern UI features, and integrates seamlessly with Vercel. Here’s the recommendation:

* **Framework**: **Next.js**  
  * Reason: React-based, excellent for routing, static site generation, and Vercel deployment. Built-in CSS/JS optimization.  
* **Styling**: **Tailwind CSS**  
  * Reason: Rapid prototyping of gradient-heavy designs, glow effects, and responsive layouts. Built-in dark mode support with dark: prefix.  
* **State Management**: **React Context** (or local state)  
  * Reason: Lightweight for a frontend-only app with mock data. Ideal for managing theme state.  
* **Animations**: **Framer Motion**  
  * Reason: Easy-to-implement glow animations, transitions, and Dynamic Island scaling effects.  
* **Deployment**: **Vercel**  
  * Reason: Seamless integration with Next.js, free hosting, and automatic scaling.

#### **4.2 Alternatives**

* **Vue.js \+ Nuxt**: If you prefer Vue, it’s lightweight and Vercel-friendly but less popular for quick hackathon builds.  
* **CSS Modules**: Instead of Tailwind, for more control, but slower to style gradients/glows and manage themes.

---

### **5\. Development Plan**

#### **5.1 Milestones**

1. **Setup (1-2 hours)**  
   * Initialize Next.js project with Tailwind CSS and Framer Motion.  
   * Set up folder structure (pages, components, styles).  
   * Configure Tailwind for dark mode (darkMode: 'class' in config).  
2. **Core Pages (4-6 hours)**  
   * Build Landing, Plans, Signup, and About pages with gradients and glow effects.  
   * Mock data for plans and forms.  
3. **UI Features (3-4 hours)**  
   * Add Location Tracker header.  
   * Implement Dynamic Island with animations.  
   * Add light/dark mode toggle with theme persistence (local storage).  
4. **Polish & Testing (2-3 hours)**  
   * Ensure responsiveness and browser compatibility.  
   * Test theme switching for color consistency and readability.  
   * Optimize animations and load times.  
5. **Deployment (1 hour)**  
   * Push to GitHub and deploy on Vercel.  
   * Test live URL.

#### **5.2 Tools**

* **Code Editor**: VS Code  
* **Version Control**: Git/GitHub  
* **Design Inspiration**: Figma/Dribbble (optional for quick sketches).

---

### **6\. Submission Deliverables**

* **Working Mini-App**: Hosted on Vercel with a public URL.  
* **Source Code**: GitHub repo link (optional, if required by hackathon).  
* **Presentation**: Brief description of features and design choices (e.g., in README or a 1-min video).

---

### **7\. Additional Notes**

#### 

* **Mock Data**: Predefine subscription plans (e.g., Basic: $10/month, 5 pickups; Premium: $25/month, unlimited).  
* **Error States**: Simple UI for form validation errors (e.g., "Invalid email").  
* **Loading States**: Add subtle loaders for mock "order processing".  
* **SEO**: Basic meta tags in Next.js for presentation polish.  
* Add a "Dashboard" page showing mock order history.  
* Include sound effects on hover (e.g., subtle click for glow buttons).  
* Enhance Dynamic Island with mode-specific animations.

---

