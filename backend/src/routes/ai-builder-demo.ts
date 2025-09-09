import express from 'express';

const router = express.Router();

// Generate website code using AI (Demo version)
router.post('/generate', async (req: any, res) => {
  try {
    const { description, type = 'website', features = [] } = req.body;

    if (!description) {
      return res.status(400).json({ message: 'Description is required' });
    }

    // Demo mode - generate a sample website
    const demoCode = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>AI Generated ${type.charAt(0).toUpperCase() + type.slice(1)} - Portfolio</title>
    <style>
        * { 
            margin: 0; 
            padding: 0; 
            box-sizing: border-box; 
        }
        
        body { 
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; 
            line-height: 1.6; 
            color: #e0e0e0;
            background: linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%);
            min-height: 100vh;
        }
        
        .container { 
            max-width: 1200px; 
            margin: 0 auto; 
            padding: 20px;
        }
        
        header { 
            text-align: center; 
            padding: 80px 0; 
            color: white;
            position: relative;
            overflow: hidden;
        }
        
        header::before {
            content: '';
            position: absolute;
            top: -50%;
            left: -50%;
            width: 200%;
            height: 200%;
            background: radial-gradient(circle, rgba(255,255,255,0.1) 0%, transparent 70%);
            animation: float 6s ease-in-out infinite;
        }
        
        @keyframes float {
            0%, 100% { transform: translateY(0px); }
            50% { transform: translateY(-20px); }
        }
        
        h1 { 
            font-size: 3.5rem; 
            margin-bottom: 1rem;
            text-shadow: 2px 2px 4px rgba(0,0,0,0.5);
            background: linear-gradient(45deg, #ff6b6b, #4ecdc4, #45b7d1);
            background-size: 300% 300%;
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            animation: gradient 3s ease infinite;
        }
        
        @keyframes gradient {
            0%, 100% { background-position: 0% 50%; }
            50% { background-position: 100% 50%; }
        }
        
        .subtitle { 
            font-size: 1.3rem; 
            opacity: 0.9;
            margin-bottom: 3rem;
            position: relative;
            z-index: 1;
        }
        
        nav {
            background: rgba(255,255,255,0.1);
            backdrop-filter: blur(10px);
            border-radius: 15px;
            padding: 15px 0;
            margin: 20px 0;
            box-shadow: 0 8px 32px rgba(0,0,0,0.3);
        }
        
        nav ul {
            list-style: none;
            display: flex;
            justify-content: center;
            gap: 40px;
        }
        
        nav a {
            color: white;
            text-decoration: none;
            font-weight: 500;
            transition: all 0.3s ease;
            padding: 10px 20px;
            border-radius: 8px;
        }
        
        nav a:hover {
            background: rgba(255,255,255,0.2);
            transform: translateY(-2px);
        }
        
        .content {
            background: rgba(255,255,255,0.05);
            backdrop-filter: blur(10px);
            border-radius: 20px;
            padding: 50px;
            box-shadow: 0 15px 35px rgba(0,0,0,0.3);
            margin: 30px 0;
            border: 1px solid rgba(255,255,255,0.1);
        }
        
        .portfolio-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
            gap: 30px;
            margin: 50px 0;
        }
        
        .project-card {
            background: linear-gradient(145deg, rgba(255,255,255,0.1), rgba(255,255,255,0.05));
            border-radius: 15px;
            padding: 30px;
            text-align: center;
            transition: all 0.3s ease;
            border: 1px solid rgba(255,255,255,0.1);
            position: relative;
            overflow: hidden;
        }
        
        .project-card::before {
            content: '';
            position: absolute;
            top: 0;
            left: -100%;
            width: 100%;
            height: 100%;
            background: linear-gradient(90deg, transparent, rgba(255,255,255,0.1), transparent);
            transition: left 0.5s;
        }
        
        .project-card:hover::before {
            left: 100%;
        }
        
        .project-card:hover {
            transform: translateY(-10px);
            box-shadow: 0 20px 40px rgba(0,0,0,0.4);
        }
        
        .project-icon {
            font-size: 3rem;
            margin-bottom: 20px;
            background: linear-gradient(45deg, #ff6b6b, #4ecdc4);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
        }
        
        .about-section {
            text-align: center;
            margin: 60px 0;
        }
        
        .skills {
            display: flex;
            flex-wrap: wrap;
            gap: 15px;
            justify-content: center;
            margin: 30px 0;
        }
        
        .skill-tag {
            background: linear-gradient(45deg, #667eea, #764ba2);
            color: white;
            padding: 10px 20px;
            border-radius: 25px;
            font-size: 14px;
            font-weight: 500;
            transition: all 0.3s ease;
        }
        
        .skill-tag:hover {
            transform: scale(1.05);
            box-shadow: 0 5px 15px rgba(102, 126, 234, 0.4);
        }
        
        .contact-form {
            max-width: 600px;
            margin: 50px auto;
            background: rgba(255,255,255,0.05);
            padding: 40px;
            border-radius: 15px;
            border: 1px solid rgba(255,255,255,0.1);
        }
        
        .form-group {
            margin-bottom: 25px;
        }
        
        .form-group label {
            display: block;
            margin-bottom: 8px;
            color: #b0b0b0;
            font-weight: 500;
        }
        
        .form-group input,
        .form-group textarea {
            width: 100%;
            padding: 12px 15px;
            background: rgba(255,255,255,0.1);
            border: 1px solid rgba(255,255,255,0.2);
            border-radius: 8px;
            color: white;
            font-size: 16px;
            transition: all 0.3s ease;
        }
        
        .form-group input:focus,
        .form-group textarea:focus {
            outline: none;
            border-color: #4ecdc4;
            box-shadow: 0 0 15px rgba(78, 205, 196, 0.3);
        }
        
        .btn {
            background: linear-gradient(45deg, #667eea, #764ba2);
            color: white;
            padding: 15px 40px;
            border: none;
            border-radius: 30px;
            font-size: 16px;
            font-weight: 600;
            cursor: pointer;
            transition: all 0.3s ease;
            text-transform: uppercase;
            letter-spacing: 1px;
        }
        
        .btn:hover {
            transform: translateY(-3px);
            box-shadow: 0 10px 25px rgba(102, 126, 234, 0.4);
        }
        
        footer {
            text-align: center;
            padding: 40px 0;
            color: #888;
            border-top: 1px solid rgba(255,255,255,0.1);
            margin-top: 50px;
        }
        
        @media (max-width: 768px) {
            h1 { font-size: 2.5rem; }
            .content { padding: 30px 20px; }
            nav ul { flex-direction: column; gap: 10px; }
            .portfolio-grid { grid-template-columns: 1fr; }
        }
        
        /* Scrollbar styling */
        ::-webkit-scrollbar {
            width: 8px;
        }
        
        ::-webkit-scrollbar-track {
            background: rgba(255,255,255,0.1);
        }
        
        ::-webkit-scrollbar-thumb {
            background: linear-gradient(45deg, #667eea, #764ba2);
            border-radius: 4px;
        }
    </style>
</head>
<body>
    <div class="container">
        <header>
            <h1>Creative Portfolio</h1>
            <p class="subtitle">${description}</p>
        </header>
        
        <nav>
            <ul>
                <li><a href="#home">Home</a></li>
                <li><a href="#portfolio">Portfolio</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>
        </nav>
        
        <section id="portfolio" class="content">
            <h2 style="text-align: center; margin-bottom: 40px; font-size: 2.5rem;">My Work</h2>
            <div class="portfolio-grid">
                <div class="project-card">
                    <div class="project-icon">🎨</div>
                    <h3>Brand Identity</h3>
                    <p>Complete brand identity design including logo, color palette, and brand guidelines for modern businesses.</p>
                </div>
                <div class="project-card">
                    <div class="project-icon">📱</div>
                    <h3>UI/UX Design</h3>
                    <p>User-centered interface designs for web and mobile applications with focus on usability and aesthetics.</p>
                </div>
                <div class="project-card">
                    <div class="project-icon">🖼️</div>
                    <h3>Digital Artwork</h3>
                    <p>Creative digital illustrations and artwork for various media including print and digital platforms.</p>
                </div>
                <div class="project-card">
                    <div class="project-icon">📖</div>
                    <h3>Print Design</h3>
                    <p>Professional print materials including brochures, business cards, and marketing collaterals.</p>
                </div>
            </div>
        </section>
        
        <section id="about" class="content about-section">
            <h2 style="font-size: 2.5rem; margin-bottom: 30px;">About Me</h2>
            <p style="font-size: 1.1rem; line-height: 1.8; margin-bottom: 30px;">
                I'm a passionate graphic designer with over 5 years of experience creating visually stunning designs 
                that tell stories and connect with audiences. My approach combines creativity with strategic thinking 
                to deliver designs that not only look great but also achieve business objectives.
            </p>
            
            <h3 style="margin: 40px 0 20px; font-size: 1.8rem;">Skills & Expertise</h3>
            <div class="skills">
                ${features.map((feature: string) => `<span class="skill-tag">${feature}</span>`).join('')}
                <span class="skill-tag">Adobe Creative Suite</span>
                <span class="skill-tag">Figma</span>
                <span class="skill-tag">Brand Design</span>
                <span class="skill-tag">Web Design</span>
                <span class="skill-tag">Typography</span>
                <span class="skill-tag">Color Theory</span>
            </div>
        </section>
        
        <section id="contact" class="content">
            <h2 style="text-align: center; font-size: 2.5rem; margin-bottom: 40px;">Get In Touch</h2>
            <form class="contact-form">
                <div class="form-group">
                    <label for="name">Name</label>
                    <input type="text" id="name" name="name" required>
                </div>
                <div class="form-group">
                    <label for="email">Email</label>
                    <input type="email" id="email" name="email" required>
                </div>
                <div class="form-group">
                    <label for="project">Project Type</label>
                    <input type="text" id="project" name="project" placeholder="e.g., Logo Design, Website UI">
                </div>
                <div class="form-group">
                    <label for="message">Message</label>
                    <textarea id="message" name="message" rows="5" placeholder="Tell me about your project..."></textarea>
                </div>
                <div style="text-align: center;">
                    <button type="submit" class="btn">Send Message</button>
                </div>
            </form>
        </section>
        
        <footer>
            <p>&copy; 2024 Creative Portfolio. Generated by AI Website Builder.</p>
        </footer>
    </div>
    
    <script>
        // Interactive features
        document.addEventListener('DOMContentLoaded', function() {
            console.log('Portfolio website loaded successfully!');
            
            // Smooth scrolling for navigation links
            document.querySelectorAll('nav a').forEach(link => {
                link.addEventListener('click', function(e) {
                    e.preventDefault();
                    const targetId = this.getAttribute('href').substring(1);
                    const targetElement = document.getElementById(targetId);
                    if (targetElement) {
                        targetElement.scrollIntoView({ behavior: 'smooth' });
                    }
                });
            });
            
            // Form submission
            document.querySelector('.contact-form').addEventListener('submit', function(e) {
                e.preventDefault();
                alert('Thank you for your message! This is a demo - in a real website, this would send your message.');
            });
            
            // Add hover effects to project cards
            document.querySelectorAll('.project-card').forEach(card => {
                card.addEventListener('mouseenter', function() {
                    this.style.transform = 'translateY(-10px) scale(1.02)';
                });
                
                card.addEventListener('mouseleave', function() {
                    this.style.transform = 'translateY(0) scale(1)';
                });
            });
        });
    </script>
</body>
</html>`;

    res.json({
      success: true,
      code: demoCode,
      description,
      type,
      features,
      generatedAt: new Date(),
      tokens: 0,
      demo: true,
      message: 'Demo website generated successfully! This is a sample without real AI - configure OpenAI API key for real AI generation.'
    });

  } catch (error) {
    console.error('Demo generation error:', error);
    res.status(500).json({ 
      message: 'Failed to generate demo website',
      error: error instanceof Error ? error.message : 'Unknown error'
    });
  }
});

// Generate with Gemini as backup/alternative
router.post('/generate-gemini', async (req: any, res) => {
  try {
    res.status(501).json({
      message: 'Gemini integration coming soon',
      fallback: 'Please use the OpenAI endpoint for now'
    });
  } catch (error) {
    console.error('Gemini generation error:', error);
    res.status(500).json({ 
      message: 'Failed to generate website with Gemini',
      error: error instanceof Error ? error.message : 'Unknown error'
    });
  }
});

export default router;