import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const {
      name,
      email,
      subject,
      message,
    } = body;

    // Validation
    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        {
          success: false,
          message: "সবগুলো তথ্য পূরণ করুন।",
        },
        { status: 400 }
      );
    }

    const { data, error } = await resend.emails.send({
      from: "Nalitabari Portal <onboarding@resend.dev>",
      to: ["info@azijul.pro.bd"],
      replyTo: email,
      subject: `যোগাযোগ ফর্ম: ${subject}`,

      html: `
        <!DOCTYPE html>
        <html lang="bn">
          <head>
            <meta charset="UTF-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          </head>

          <body
            style="
              margin: 0;
              padding: 0;
              background: #f0fdf4;
              font-family: Arial, Helvetica, sans-serif;
              color: #172033;
            "
          >
            <div
              style="
                max-width: 650px;
                margin: 40px auto;
                background: #ffffff;
                border-radius: 16px;
                overflow: hidden;
                border: 1px solid #dcfce7;
                box-shadow: 0 10px 30px rgba(0, 0, 0, 0.08);
              "
            >
              <!-- Header -->
              <div
                style="
                  padding: 28px;
                  background: linear-gradient(
                    135deg,
                    #15803d,
                    #16a34a,
                    #059669
                  );
                  color: #ffffff;
                "
              >
                <h1
                  style="
                    margin: 0;
                    font-size: 24px;
                  "
                >
                  নতুন যোগাযোগ বার্তা
                </h1>

                <p
                  style="
                    margin: 8px 0 0;
                    opacity: 0.9;
                    font-size: 14px;
                  "
                >
                  নালিতাবাড়ী উপজেলা তথ্য পোর্টাল
                </p>
              </div>

              <!-- Content -->
              <div style="padding: 28px;">
                <div
                  style="
                    margin-bottom: 18px;
                    padding: 16px;
                    background: #f8fafc;
                    border-radius: 12px;
                    border: 1px solid #e2e8f0;
                  "
                >
                  <p style="margin: 0 0 6px; color: #64748b; font-size: 13px;">
                    প্রেরকের নাম
                  </p>

                  <p
                    style="
                      margin: 0;
                      font-size: 16px;
                      font-weight: 600;
                    "
                  >
                    ${escapeHtml(name)}
                  </p>
                </div>

                <div
                  style="
                    margin-bottom: 18px;
                    padding: 16px;
                    background: #f8fafc;
                    border-radius: 12px;
                    border: 1px solid #e2e8f0;
                  "
                >
                  <p style="margin: 0 0 6px; color: #64748b; font-size: 13px;">
                    ইমেইল
                  </p>

                  <p
                    style="
                      margin: 0;
                      font-size: 16px;
                      font-weight: 600;
                    "
                  >
                    ${escapeHtml(email)}
                  </p>
                </div>

                <div
                  style="
                    margin-bottom: 18px;
                    padding: 16px;
                    background: #f8fafc;
                    border-radius: 12px;
                    border: 1px solid #e2e8f0;
                  "
                >
                  <p style="margin: 0 0 6px; color: #64748b; font-size: 13px;">
                    বিষয়
                  </p>

                  <p
                    style="
                      margin: 0;
                      font-size: 16px;
                      font-weight: 600;
                    "
                  >
                    ${escapeHtml(subject)}
                  </p>
                </div>

                <div
                  style="
                    padding: 18px;
                    background: #f0fdf4;
                    border-radius: 12px;
                    border: 1px solid #bbf7d0;
                  "
                >
                  <p
                    style="
                      margin: 0 0 10px;
                      color: #15803d;
                      font-size: 13px;
                      font-weight: 600;
                    "
                  >
                    বার্তা
                  </p>

                  <p
                    style="
                      margin: 0;
                      white-space: pre-wrap;
                      line-height: 1.7;
                      font-size: 15px;
                    "
                  >
                    ${escapeHtml(message)}
                  </p>
                </div>
              </div>

              <!-- Footer -->
              <div
                style="
                  padding: 20px 28px;
                  border-top: 1px solid #e2e8f0;
                  color: #64748b;
                  font-size: 12px;
                  text-align: center;
                "
              >
                এই ইমেইলটি নালিতাবাড়ী উপজেলা তথ্য পোর্টালের
                যোগাযোগ ফর্ম থেকে পাঠানো হয়েছে।
              </div>
            </div>
          </body>
        </html>
      `,
    });

    if (error) {
      console.error("Resend error:", error);

      return NextResponse.json(
        {
          success: false,
          message: "ইমেইল পাঠানো যায়নি।",
        },
        { status: 500 }
      );
    }

    return NextResponse.json({
      success: true,
      message: "আপনার বার্তা সফলভাবে পাঠানো হয়েছে।",
      data,
    });
  } catch (error) {
    console.error("Contact API error:", error);

    return NextResponse.json(
      {
        success: false,
        message: "সার্ভারে সমস্যা হয়েছে। আবার চেষ্টা করুন।",
      },
      { status: 500 }
    );
  }
}

function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}