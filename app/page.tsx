import { ModeToggle } from "@/src/components/theme-toggle";
import { MoveRight, Github } from "lucide-react";
import { Button } from "@/src/components/ui/button";
import { Badge } from "@/src/components/ui/badge";
import Image from "next/image";
import Link from "next/link";
import { GitHubLogoIcon } from "@radix-ui/react-icons";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/src/components/ui/tooltip"


export default function Home() {
  return (
    <div className="w-full py-20 lg:py-20">
    <div className="container mx-auto">
      <div className="grid grid-cols-1 gap-8 items-center md:grid-cols-2">
        <div className="flex gap-4 flex-col">
          <div>
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger className="cursor-help">
                <Badge variant="destructive">Alerta de spoilers!</Badge>
              </TooltipTrigger>
              <TooltipContent className="w-80 bg-background border text-white hyphens-auto ml-4">
                <p>O conteúdo desta enciclopédia contém revelações significativas sobre todas as obras do Brandon Sanderson. Leia por sua conta e risco.</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>

            
          </div>
          <div className="flex gap-4 flex-col">
            <h1 className="text-5xl md:text-7xl max-w-lg tracking-tighter text-left font-regular">
              bem-vindo(a) à <span className="text-[#e73720]">sandbr</span>!
            </h1>
            <p className="text-xl leading-relaxed tracking-tight text-muted-foreground max-w-md text-left">
              A enciclopédia brasileira sobre <Link href="/brandon-sanderson" className="hover:underline">Brandon Sanderson</Link>.
            </p>
          </div>
          <div className="flex flex-row gap-4">
            <Button size="lg" className="gap-4" variant="outline" asChild>
              <a href="https://github.com/sand-br/sandbr" target="_blank" rel="noopener noreferrer">Contribua <GitHubLogoIcon className="w-4 h-4" /></a>
            </Button>
            <Button size="lg" className="gap-4">
              Explorar <MoveRight className="w-4 h-4" />
            </Button>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-8">
          <div className="bg-muted rounded-md aspect-square box-border overflow-hidden">
            <Image src="https://i.imgur.com/1y5z29V.jpeg" width={300} height={300} alt="Vin"/>
          </div>
          <div className="bg-muted rounded-md row-span-2 aspect-[9/16] box-border overflow-hidden">
            <Image src="https://i.imgur.com/dpPAk60.jpeg" width={500} height={1000} alt="Vin"/>
          </div>
          <div className="bg-muted rounded-md aspect-square box-border overflow-hidden">
            <Image src="https://i.imgur.com/AxXqYO2.jpeg" width={300} height={300} alt="Vin"/>
          </div>
        </div>
      </div>
    </div>
  </div>
  );
}
