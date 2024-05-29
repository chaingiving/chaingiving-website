import {Button} from "@/components/ui/button";

export default function Page() {
    return (
        <div className="relative w-full max-w-4xl">
            <a href="/chaingiving-litepaper.pdf">
                <Button className="top-4 right-4 bg-blue-500 text-white py-2 px-4 bg-green-500 hover:bg-green-700 rounded text-white">
                    Download PDF
                </Button>
            </a>
            <div className="iframeWrapper">
                <iframe
                    src="https://docs.google.com/document/d/e/2PACX-1vTNjl8-m9BLFxGBg-CQc4M31NeaZ0-xWECPmKETBirbygO0X55aRUxMDTrTsCXhb8n5b5G5iVoEW0CA/pub?embedded=true"
                ></iframe>
            </div>
        </div>
    );
}