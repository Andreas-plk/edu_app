import Image from "next/image";
import {Button} from "@/components/ui/button";
import Link from "next/link";
import {auth} from "@/auth";
import My_toaster from "@/components/My_toaster";


export default async function Home() {
    const session = await auth();

  return (
      <>
          <section className="flex flex-col min-h-[650px] justify-center items-center">
              <h1 className="heading">Καλωσορίσατε στο Ψηφιακό Ταξίδι στο Ζάππειο και τη Γειτονιά του</h1>
              <div className="subheading mb-10">
                  Ανακαλύψτε έναν μοναδικό πολιτιστικό και φυσικό θησαυρό στην καρδιά της Αθήνας! Μέσα από
                  αυτή την εκπαιδευτική πλατφόρμα, σας προσκαλούμε να γνωρίσετε το Ζάππειο και τα σπουδαία σημεία
                  ενδιαφέροντος που το περιβάλλουν: τον ιστορικό κινηματογράφο «Αίγλη», το επιβλητικό Καλλιμάρμαρο
                  Στάδιο, και τον καταπράσινο Εθνικό Κήπο. Εδώ, ο τουρισμός συναντά την ιστορία, την αρχιτεκτονική
                  και τη φύση, δημιουργώντας μια μοναδική εμπειρία μάθησης για όλους τους λάτρεις της πολιτιστικής κληρονομιάς.
              </div>

          </section>

          <section className="flex flex-col justify-center items-center min-h-[600px] w-full bg-black pb-30">
              <div className="flex flex-col-2 p-10">
                  <Image src={"/background.png"} alt={"bg"} width={500} height={300} className="rounded-xl m-10 ring-2 ring-green-300 drop-shadow-lg drop-shadow-green-300"/>
                  <div className="plain-text !text-white p-10 ">
                  Η εφαρμογή αυτή σχεδιάστηκε για να σε βοηθήσει να γνωρίσεις καλύτερα τρία σημαντικά σημεία της Αθήνας, που συνδυάζουν ιστορία, πολιτισμό και φύση:
                  το Ζάππειο Μέγαρο, το Καλλιμάρμαρο Στάδιο και τον Εθνικό Κήπο.

                  Η περιήγηση χωρίζεται σε τρεις ενότητες, μία για κάθε τοποθεσία. Σε κάθε ενότητα:

                  Θα διαβάζεις πληροφορίες για την ιστορία, την αρχιτεκτονική, τη σημασία και τα βασικά χαρακτηριστικά του χώρου.

                  Μετά την ανάγνωση, θα μπορείς να ελέγξεις τις γνώσεις σου απαντώντας σε 5 ερωτήσεις πολλαπλής επιλογής, βασισμένες στο περιεχόμενο που μόλις διάβασες.

                  Οι ερωτήσεις έχουν σκοπό να σε βοηθήσουν να θυμάσαι καλύτερα τις πληροφορίες με διασκεδαστικό τρόπο.

                  Όταν ολοκληρώσεις και τις τρεις ενότητες, η εφαρμογή θα σου παρουσιάσει τα συνολικά αποτελέσματά σου, ώστε να δεις σε ποιο βαθμό κατανόησες και θυμάσαι τις πληροφορίες.

                  Η εκπαιδευτική αυτή εμπειρία είναι ιδανική για:

                  Μαθητές και εκπαιδευτικούς

                  Επισκέπτες της Αθήνας

                  Όσους θέλουν να μάθουν περισσότερα για εμβληματικά σημεία της πόλης

                  Ξεκίνα την εξερεύνηση και μάθε με διαδραστικό τρόπο!
                  Καλή επιτυχία και καλή διασκέδαση!
              </div>

          </div>
              {session?(<Button className="button-style"><Link href="/quiz/section-1/info">ΑΣ ΞΕΚΙΝΗΣΕΙ ΤΟ ΤΑΞΙΔΙ</Link></Button>)
                  :(<My_toaster text={'ΑΣ ΞΕΚΙΝΗΣΕΙ ΤΟ ΤΑΞΙΔΙ'} notification={'Πρέπει να συνδεθείς για να ξεκινήσεις'}/>)}

          </section>
      </>
  );
}
