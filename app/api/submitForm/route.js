import nodemailer from "nodemailer";

export async function POST(req) {
  try {
    const { email, message } = await req.json();

    // Configure Nodemailer transporter
    const transporter = nodemailer.createTransport({
      // Your email service configuration (e.g., SMTP settings)
      // Example for Gmail:
      service: "gmail",
      auth: {
        user: "jotishsharma03@gmail.com",
        pass: "ueegyxsfhpgvqdil",
      },
    });

    const emailTemplate = `
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Email Template</title>
      <style>
        /* Reset styles */
        body, html {
          margin: 0;
          padding: 0;
        }
        body {
          font-family: Arial, sans-serif;
          background-color: #f4f4f4;
        }
        /* Container */
        .container {
          max-width: 600px;
          margin: 0 auto;
          padding: 20px;
          background-color: #fff;
          border-radius: 5px;
          box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
        }
        /* Header */
        .header {
          text-align: center;
          margin-bottom: 20px;
        }
        .header h1 {
          color: #333;
          margin: 0;
          font-size: 24px;
        }
        /* Content */
        .content {
          padding: 20px;
          background-color: #f9f9f9;
          border-radius: 5px;
          box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
        }
        .content p {
          margin-bottom: 10px;
          line-height: 1.6;
        }
        /* Button */
        .button {
          text-align: center;
          margin-top: 20px;
        }
        .button a {
          display: inline-block;
          padding: 10px 20px;
          background-color: #007bff;
          color: #fff;
          text-decoration: none;
          border-radius: 5px;
        }
        /* Footer */
        .footer {
          text-align: center;
          margin-top: 20px;
          color: #666;
          font-size: 12px;
        }
      </style>
    </head>
    <body>
      <div class="container">
        <div class="header">
          <h1>New Message</h1>
        </div>
        <div class="content">
          <p><strong>Query From:</strong> ${email}</p>
          <p><strong>Query:</strong> ${message}</p>
        </div>
        <div class="button">
          <a href="mailto:${email}" target="_blank">Reply to Query</a>
        </div>
        <div class="footer">
          <p>This email was sent via <a href="https://www.jotishsharma.com" target="_blank">Your Website</a>.</p>
        </div>
      </div>
    </body>
    </html>
    
    `;

    // Send mail with defined transport object
    const info = await transporter.sendMail({
      from: "jotishsharma03@gmail.com",
      to: "jotishsharma03@gmail.com",
      subject: `New Query from ${email}`,
      html: emailTemplate,
    });

    console.log("Message sent: %s", info.messageId);

    return new Response(
      JSON.stringify({ success: true, message: "Form submitted successfully" }),
      {
        status: 200,
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
  } catch (error) {
    console.error("Error sending email:", error);
    return new Response(
      JSON.stringify({ success: false, message: "Error submitting form" }),
      {
        status: 500,
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
  }
}
