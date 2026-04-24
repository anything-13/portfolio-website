# 🌐 Personal Portfolio Website

A responsive personal portfolio website built using **HTML, CSS, and JavaScript**.  
This project showcases my skills, academic journey, and contact information as a **BSc CSIT student**.

---

## 📌 Overview

This portfolio includes:

- 👤 Personal introduction  
- 🎓 Academic background  
- 💻 Skills and technologies  
- 📄 Records & certificates  
- 📬 Contact form (EmailJS integrated)  

It is fully responsive and works on desktop and mobile devices.

---

## 🚀 Features

- Clean and modern UI  
- Fully responsive design  
- Sticky navigation bar  
- Active section highlighting  
- Mobile hamburger menu  
- Scroll-to-top button  
- Dynamic footer year  
- Contact form with EmailJS (sends real emails)  

---

## 🛠️ Technologies Used

- HTML5  
- CSS3  
- JavaScript (Vanilla)  
- EmailJS  

---

## 📂 Project Structure

```
portfolio/
│
├── index.html
├── css/
│   └── style.css
├── js/
│   └── script.js
├── assets/
│   ├── images/
│   ├── records/
│   └── certificates/
```

---

## ⚙️ How to Run

1. Download or clone the repository:
   ```bash
   git clone https://github.com/your-username/your-repo-name.git
   ```

2. Open `index.html` in your browser.

---

## 📧 EmailJS Setup (Contact Form)

To enable the contact form:

1. Go to https://www.emailjs.com and create a free account  
2. Add a Gmail service  
3. Create an email template using:
   - `{{from_name}}`
   - `{{from_email}}`
   - `{{message}}`

4. Copy your:
   - Public Key  
   - Service ID  
   - Template ID  

5. Open `js/script.js` and replace:

```javascript
const EMAILJS_PUBLIC_KEY  = 'YOUR_PUBLIC_KEY';
const EMAILJS_SERVICE_ID  = 'YOUR_SERVICE_ID';
const EMAILJS_TEMPLATE_ID = 'YOUR_TEMPLATE_ID';
```

---

## 🎯 Future Improvements

- Add real project section  
- Add dark mode  
- Improve UI animations  
- Add backend (optional)  

---

## 👤 Author

**Rojesh Niroula**  
BSc CSIT Student  
Interested in IT, Networking, and Development  

---

## ⭐ Support

If you like this project, give it a ⭐ on GitHub!
