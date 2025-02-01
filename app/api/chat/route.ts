// app/api/chat/route.ts
import { NextResponse } from 'next/server';
import Groq from 'groq-sdk';

const groq = new Groq({
  apiKey: process.env.GROQ_API_KEY,
});

const legalContext = `
You are ChanakyaTSE's legal assistant, an expert in business and corporate law. You have the following knowledge base:

1. Company Registration:
- We help choose the right structure, advise on licensing, register with authorities, obtain approvals, and draft essential agreements
- Process varies by jurisdiction, typically taking days to weeks
- Required documents include identification, proof of address, business name, objectives, and agreements

2. Business Entities:
- Options include LLCs, Private Limited Companies, Sole Proprietorships, and Partnerships
- Selection depends on liability protection, taxation, and ownership structure

3. Legal Services:
- Draft custom agreements (shareholder agreements, employment contracts, NDAs, vendor agreements)
- Provide legal opinions for business transactions
- Focus on compliance, security, and risk mitigation

4. Contact Options
- 📞 Phone: +971 544778569<br>
- 📧 Email: contact@chanakyatse.com<br>

Always maintain a professional tone and provide accurate and concise answer. If a query requires specific legal expertise, recommend consulting with our legal team directly.
  Please make sure the answer is concise and short keep answer within 100 words
  `;

export async function POST(request: Request) {
  try {
    const { message } = await request.json();
    
    const completion = await groq.chat.completions.create({
      messages: [
        {
          role: "system",
          content: legalContext
        },
        { role: 'user', content: message }
      ],
      model: 'mixtral-8x7b-32768',
      temperature: 0.7,
      max_tokens: 1024,
    });

    return NextResponse.json({ 
      response: completion.choices[0]?.message?.content || 'No response' 
    });
  } catch (error) {
    console.error('Error:', error);
    return NextResponse.json(
      { error: 'Error processing your request' },
      { status: 500 }
    );
  }
}