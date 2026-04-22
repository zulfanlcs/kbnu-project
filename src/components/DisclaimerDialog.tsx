import { useEffect, useState } from "react";
import { Facebook, Instagram } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";

const FACEBOOK_URL = "https://www.facebook.com/profile.php?id=100007466684206";
const INSTAGRAM_URL = "https://www.instagram.com/zulfan_ibnabdillah/";

export const DisclaimerDialog = () => {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    // Tampil setiap kali website dibuka
    setOpen(true);
  }, []);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent className="max-w-2xl border-border/60 bg-card/95 backdrop-blur-xl shadow-elegant">
        <DialogHeader>
          <DialogTitle className="text-center font-display text-2xl md:text-3xl tracking-tight">
            <span className="bg-gradient-hero bg-clip-text text-transparent">
              DISCLAIMER
            </span>
          </DialogTitle>
          <DialogDescription className="sr-only">
            Pernyataan disclaimer mengenai sumber materi pada website KBNU Online.
          </DialogDescription>
        </DialogHeader>

        <ScrollArea className="max-h-[55vh] pr-4">
          <div className="space-y-4 text-sm md:text-base text-foreground/90 leading-relaxed">
            <p>
              Seluruh materi sejarah yang disajikan di website ini bersumber dari
              berbagai referensi publik yang dapat diakses secara umum, seperti
              buku, jurnal, dan sumber terpercaya lainnya. Kami berupaya menyajikan
              informasi yang akurat serta sesuai dengan fakta sejarah yang ada.
            </p>
            <p>
              Namun demikian, perbedaan penafsiran, keterbatasan sumber, atau
              kekeliruan dalam penyusunan konten masih mungkin terjadi. Oleh karena
              itu, apabila Anda menemukan informasi yang kurang tepat atau perlu
              diperbaiki, hal tersebut bukan merupakan unsur kesengajaan.
            </p>
            <p>
              Kami sangat menghargai setiap masukan dan koreksi dari pembaca guna
              meningkatkan kualitas dan keakuratan materi yang disajikan.
            </p>
            <p>
              Silakan menghubungi kami melalui media sosial yang tersedia untuk
              menyampaikan saran atau laporan kesalahan.
            </p>

            <div className="mt-6 rounded-xl border border-border/60 bg-background/40 p-4 space-y-3">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm">
                <div>
                  <span className="text-muted-foreground">Pengembang:</span>{" "}
                  <span className="font-semibold">Zulfan Ainul Mahdi</span>
                </div>
                <div>
                  <span className="text-muted-foreground">Editor:</span>{" "}
                  <span className="font-semibold">Zulfan Ainul Mahdi</span>
                </div>
              </div>

              <div className="flex items-center justify-center gap-3 pt-2">
                <a
                  href={FACEBOOK_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Facebook"
                  className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border/60 bg-card/60 text-foreground transition-all hover:border-brand hover:text-brand hover:shadow-elegant"
                >
                  <Facebook className="h-5 w-5" />
                </a>
                <a
                  href={INSTAGRAM_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                  className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border/60 bg-card/60 text-foreground transition-all hover:border-brand hover:text-brand hover:shadow-elegant"
                >
                  <Instagram className="h-5 w-5" />
                </a>
              </div>
            </div>
          </div>
        </ScrollArea>

        <DialogFooter className="sm:justify-center">
          <Button
            onClick={() => setOpen(false)}
            className="rounded-full px-8 bg-gradient-hero text-brand-foreground shadow-elegant hover:opacity-90"
            size="lg"
          >
            Setuju
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};
