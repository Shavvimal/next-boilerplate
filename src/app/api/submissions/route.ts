import { NextResponse, NextRequest } from "next/server";
import { Client } from "@notionhq/client";

async function addNotionPageToDatabase(
  databaseId: string,
  name: string,
  email: string,
  message: string,
  emailMarketing: boolean,
  src: string
) {
  const notion = new Client({ auth: process.env.NOTION_SECRET });
  /*

  Properties of the database:

  Can Collect this using:

    const database = await notion.databases.retrieve({
      database_id,
    });
    console.log(database)

    This returns: 

    {
    Message: { id: 'Du%7CE', name: 'Message', type: 'rich_text', rich_text: {} },
    email_marketing: {
      id: '%5BrOs',
      name: 'email_marketing',
      type: 'checkbox',
      checkbox: {}
    },
    Email: { id: 'jmAR', name: 'Email', type: 'rich_text', rich_text: {} },
    src: { id: '%7BEGs', name: 'src', type: 'rich_text', rich_text: {} },
    Name: { id: 'title', name: 'Name', type: 'title', title: {} }
  }
  */
  const newPage = await notion.pages.create({
    parent: {
      database_id: databaseId,
    },
    properties: {
      Message: {
        type: "rich_text",
        rich_text: [{ type: "text", text: { content: message } }],
      },
      email_marketing: {
        type: "checkbox",
        checkbox: emailMarketing,
      },
      Email: {
        type: "rich_text",
        rich_text: [{ type: "text", text: { content: email } }],
      },
      src: {
        type: "rich_text",
        rich_text: [{ type: "text", text: { content: src } }],
      },
      Name: {
        type: "title",
        title: [{ type: "text", text: { content: name } }],
      },
      Date: {
        type: "date",
        date: {
          start: new Date().toISOString(),
        },
      },
    },
  });
  // console.log(newPage);
}

export async function POST(req: NextRequest) {
  try {
    let { name, email, message, emailMarketing, src } = await req.json();
    console.log({
      name,
      email,
    });
    let database_id = process.env.DATABASE_ID as string;

    await addNotionPageToDatabase(
      database_id,
      name,
      email,
      message,
      emailMarketing,
      src
    );

    return NextResponse.json({
      success: true,
    });
  } catch (err) {
    console.log(err);
    return NextResponse.json({
      success: false,
    });
  }
}
