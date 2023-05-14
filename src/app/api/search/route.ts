import { NextResponse } from "next/server";
import contracts from "@/data/dummyContracts.json";

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const market = searchParams.get("market");
  const contractData = contracts.filter((p) =>
    p.market_quadra.toLowerCase().includes(market?.toLowerCase() ?? "")
  );
  //   Just return the top 10
  return NextResponse.json(contractData.slice(0, 10));
}
