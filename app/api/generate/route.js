import clientPromise from "@/lib/mongodb";

export async function POST(request) {
  try {
    const body = await request.json();
    const client = await clientPromise;
    const db = client.db("shortener");
    const collection = db.collection("urls");

    const doc = await collection.findOne({ shorturl: body.shorturl });

    if (doc) {
      return new Response(
        JSON.stringify({
          success: false,
          error: true,
          message: "URL already exists",
        }),
        { status: 400, headers: { "Content-Type": "application/json" } }
      );
    }

    await collection.insertOne({
      url: body.url,
      shorturl: body.shorturl,
    });

    return new Response(
      JSON.stringify({
        success: true,
        error: false,
        message: "URL Generated Successfully",
      }),
      { status: 200, headers: { "Content-Type": "application/json" } }
    );
  } catch (error) {
    console.error(error);
    return new Response(
      JSON.stringify({
        success: false,
        error: true,
        message: "An error occurred",
      }),
      { status: 500, headers: { "Content-Type": "application/json" } }
    );
  }
}