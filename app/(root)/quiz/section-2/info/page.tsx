import React from 'react'
import Image from "next/image";
import ImageScroller from "@/components/ImageScroller";
import {Button} from "@/components/ui/button";
import Link from "next/link";
import { images_section_two} from "@/data/images";
import {auth} from "@/auth";
import QuizCheck from "@/components/QuizCheck";



const  Page = async () => {
    const session=await auth();

    if(!session) return <div>NOt authenticated 404 your brain</div>

    return (
        <>
            <QuizCheck unit={"unit2"}/>
            <div className="flex flex-col justify-center items-center">
            <h1 className="heading">Εθνικός Κήπος</h1>
            <br/><br/>
            <p className="plain-text mx-10">
                Έκτασης 15,6 εκταρίων στο κέντρο της Αθήνας και, προσθέτοντας τον κήπο του Ζαππείου με έκταση 13 εκταρίων,
                το πάρκο έχει έκταση 28,5 εκταρίων (285 στρέμματα). Η πρώτη του ονομασία μέχρι το 1927 ήταν «Βασιλικός Κήπος».
                Το πάρκο βρίσκεται δίπλα από τη Βουλή των Ελλήνων και εκτείνεται προς τα νότια όπου βρίσκεται το Ζάππειο Μέγαρο
                απέναντι από το Παναθηναϊκό Στάδιο, όπου τελέστηκαν οι πρώτοι Μοντέρνοι Ολυμπιακοί αγώνες το 1896. Ο κήπος φιλοξενεί
                ακόμα αρχαία ερείπια, κίονες, μωσαϊκά κτλ.. Στο νοτιοανατολικό του άκρο βρίσκονται οι προτομές του Ιωάννη Καποδίστρια,
                του μεγάλου Φιλέλληνα Εϋνάρδου, ενώ στο νότιο του άκρο βρίσκεται η προτομή του εθνικού ποιητή Διονύσιου Σολωμού
                και του Αριστοτέλη Βαλαωρίτη.</p>

            <br/><br/>

                <p className={"flex flex-col-2 plain-text mx-10"}>
                    Στην αρχαιότητα μέρος του κτήματος ήταν ο ιδιωτικός κήπος του φιλόσοφου και βοτανολόγου Θεόφραστου ενός
                    των διαδόχων του Αριστοτέλη. Ο κήπος ήταν ένα δώρο από το Δημήτριο το Φαληρέα στο δάσκαλό του. Υπήρχε
                    επίσης ένα ιερό και μια βιβλιοθήκη.

                    Ο βασιλικός κήπος οριοθετήθηκε το 1836 από τον Φρίντριχ φον Γκέρτνερ (Friedrich von Gärtner), τον
                    αρχιτέκτονα των ανακτόρων, σε μια έκταση 500 περίπου στρεμμάτων. Επειδή η έκταση αυτή απέκλειε τον
                    δρόμο Αθήνας-Αμαρουσίου-Κηφισιάς, το σχέδιο αυτό αναθεωρήθηκε το 1839 από τον Χοχ (Hoch), διευθύνοντα
                    μηχανικό τής οικοδομής των ανακτόρων.


                    Εθνικός Κήπος
                    Ο κήπος των 155 στρεμμάτων ήταν προγραμματισμένος με εντολή τής βασίλισσας ως επιστημονικός
                    και βοτανικός κήπος, καθώς και ως ιδιωτικός. το 1839 φυτεύτηκαν 15.000 καλλωπιστικά φυτά που
                    μεταφέρθηκαν από τη Γένοβα, καθώς επίσης και με αυτοφυή είδη, που μεταφέρθηκαν από το
                    Σούνιο και την Εύβοια. Το ενδιαφέρον τής Βασίλισσας Αμαλίας για τον Κήπο ήταν τέτοιο,
                    που λέγεται οτι περνούσε τουλάχιστον τρεις ώρες την ημέρα ασχολούμενη προσωπικά με την
                    φροντίδα του. Στην οικογένεια της Αμαλίας, η δημιουργία και η συντήρηση πάρκων και κήπων
                    αποτελούσε παράδοση. Δεν εκπλήσσει λοιπόν, που και εκείνη θέλησε να κοσμήσει την Αθήνα
                    με έναν μεγάλο κήπο. Το 1842 μάλιστα φύτεψε η ίδια τις Ουασινγκτόνιες, που υπάρχουν μέχρι
                    σήμερα στην είσοδο της λεωφόρου Βασιλίσσης Αμαλίας. Η Βασίλισσα Αμαλία αργότερα στράφηκε
                    στη γεωργική πολιτική και δεν συμμετείχε πλέον στη φροντίδα του κήπου.

                    Φυτευτικές εργασίες οργάνωσε και επέβλεψε ο Γάλλος κηποτέχνης Φρανσουά Λουί Μπαρώ (François Louis Bareaud, 1803 - 1888),[1] ο οποίος ανέλαβε τη διεύθυνση τού κήπου από το 1845 έως το 1854 και ο γεωπόνος Φρειδερίκος Σμιτ (Friedrich Schmidt). Ο κήπος επεκτάθηκε από τον Γερμανό βοτανολόγο Καρλ Νίκολαους Φράας. Κατά τη διάρκεια των εργασιών, βρέθηκαν αρχαιολογικά ευρήματα, συμπεριλαμβανομένου ενός ρωμαϊκού ψηφιδωτού και ενός αρχαίου υδραγωγείου που χρησιμοποιήθηκε για τον κήπο. Διευθυντής τού κήπου ήταν ο Theodor von Held και ο διάδοχός του Σπυρίδων Μηλιαράκης.
                    <Image src="/kipos.jpg" alt="hi" width={500} height={200} />
                </p>
        </div>
            <span className="mb-5 items-center"><ImageScroller images={images_section_two}/></span>
        <div className="flex flex-col justify-center items-center">
            <Button className="button-style mb-20"> <Link href="/quiz/section-2/quiz">ΞΕΚΙΝΑ ΤΟ QUIZ </Link></Button>
        </div>
        </>

    )
}
export default Page
