<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>My Portfolio</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <header>
        <nav>
            <ul>
                <li><a href="#home">Home</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#portfolio">Portfolio</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>
        </nav>
    </header>
    <main>
        <section id="home">
            <h1>Welcome to My Portfolio</h1>
            <p>Discover my work, skills, and projects.</p>
        </section>
        <section id="about">
            <h2>About Me</h2>
            <p>A brief introduction about myself, my background, and my professional journey.</p>
        </section>
        <section id="portfolio">
            <h2>Portfolio</h2>
            <p>Explore a selection of my projects and accomplishments.</p>
            <!-- Portfolio items -->
            <div class="portfolio-item">
                <img src="project1.jpg" alt="Project 1">
                <p>Project 1 Description</p>
            </div>
            <!-- Add more portfolio items here -->
        </section>
        <section id="contact">
            <h2>Contact Me</h2>
            <p>Get in touch with me for collaborations or inquiries.</p>
            <form>
                <input type="text" placeholder="Your Name" required>
                <input type="email" placeholder="Your Email" required>
                <textarea placeholder="Your Message" required></textarea>
                <button type="submit">Send Message</button>
            </form>
        </section>
    </main>
    <footer>
        <p>© 2023 Your Name. All rights reserved.</p>
    </footer>
</body>
</html>