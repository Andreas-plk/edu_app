// prisma/seed.ts
import {PrismaClient} from '@/app/generated/prisma'
const prisma = new PrismaClient();

async function main() {
    // Κατηγορίες
    const nationalGarden = await prisma.category.create({ data: { name: 'Εθνικός Κήπος' } });
    const zappeion = await prisma.category.create({ data: { name: 'Ζάππειο' } });
    const kallimarmaro = await prisma.category.create({ data: { name: 'Καλλιμάρμαρο' } });

    // Ερωτήσεις για Εθνικό Κήπο - Εύκολες
    await prisma.question.create({
        data: {
            text: 'Πού βρίσκεται ο Εθνικός Κήπος;',
            difficulty: 'EASY',
            categoryId: nationalGarden.id,
            options: {
                create: [
                    { text: 'Στη Θεσσαλονίκη', isCorrect: false },
                    { text: 'Στην Αθήνα', isCorrect: true },
                    { text: 'Στην Πάτρα', isCorrect: false },
                    { text: 'Στο Ηράκλειο', isCorrect: false },
                ],
            },
        },
    });

    await prisma.question.create({
        data: {
            text: 'Ποιος ήταν ο αρχικός σκοπός του Εθνικού Κήπου;',
            difficulty: 'EASY',
            categoryId: nationalGarden.id,
            options: {
                create: [
                    { text: 'Εμπορικό κέντρο', isCorrect: false },
                    { text: 'Πειραματικός κήπος για το ανάκτορο', isCorrect: true },
                    { text: 'Πεδίο βολής', isCorrect: false },
                    { text: 'Στάδιο', isCorrect: false },
                ],
            },
        },
    });

    await prisma.question.create({
        data: {
            text: 'Ποιο ζώο μπορείς να δεις στον Εθνικό Κήπο;',
            difficulty: 'EASY',
            categoryId: nationalGarden.id,
            options: {
                create: [
                    { text: 'Ελάφια', isCorrect: false },
                    { text: 'Πιγκουίνους', isCorrect: false },
                    { text: 'Πάπιες', isCorrect: true },
                    { text: 'Καμήλες', isCorrect: false },
                ],
            },
        },
    });

    await prisma.question.create({
        data: {
            text: 'Τι απεικονίζει η εικόνα;',
            difficulty: 'EASY',
            categoryId: nationalGarden.id,
            imageUrl: 'https://i.imgur.com/0000000.jpg',
            options: {
                create: [
                    { text: 'Είσοδο Ζαππείου', isCorrect: false },
                    { text: 'Τμήμα του Καλλιμάρμαρου', isCorrect: false },
                    { text: 'Γωνιά του ζωολογικού κήπου στον Εθνικό Κήπο', isCorrect: true },
                    { text: 'Πλατεία Συντάγματος', isCorrect: false },
                ],
            },
        },
    });

    await prisma.question.create({
        data: {
            text: 'Πόσο μεγάλη είναι περίπου η έκταση του Εθνικού Κήπου;',
            difficulty: 'EASY',
            categoryId: nationalGarden.id,
            options: {
                create: [
                    { text: '1 στρέμμα', isCorrect: false },
                    { text: '10 στρέμματα', isCorrect: false },
                    { text: '154 στρέμματα', isCorrect: true },
                    { text: '500 στρέμματα', isCorrect: false },
                ],
            },
        },
    });

    // Ερωτήσεις για Εθνικό Κήπο - Μέτριες
    await prisma.question.create({
        data: {
            text: 'Ποια βασίλισσα συνέλαβε την ιδέα του Εθνικού Κήπου;',
            difficulty: 'MEDIUM',
            categoryId: nationalGarden.id,
            options: {
                create: [
                    { text: 'Αμαλία', isCorrect: true },
                    { text: 'Όλγα', isCorrect: false },
                    { text: 'Φρειδερίκη', isCorrect: false },
                    { text: 'Ελισάβετ', isCorrect: false },
                ],
            },
        },
    });

    await prisma.question.create({
        data: {
            text: 'Ποιο είναι ένα από τα χαρακτηριστικά φυτά του Εθνικού Κήπου;',
            difficulty: 'MEDIUM',
            categoryId: nationalGarden.id,
            options: {
                create: [
                    { text: 'Μπαμπού', isCorrect: false },
                    { text: 'Κυπαρίσσι', isCorrect: true },
                    { text: 'Καρύδα', isCorrect: false },
                    { text: 'Λωτός', isCorrect: false },
                ],
            },
        },
    });

    await prisma.question.create({
        data: {
            text: 'Ποιο είναι το πρώτο πράγμα που βλέπεις όταν μπαίνεις στον Εθνικό Κήπο (από την κύρια είσοδο επί της Βασιλίσσης Σοφίας);',
            difficulty: 'MEDIUM',
            categoryId: nationalGarden.id,
            options: {
                create: [
                    { text: 'Ηλιακό Ρολόι', isCorrect: true },
                    { text: 'Ζωολογικός Κήπος', isCorrect: false },
                    { text: 'Παρθενώνας', isCorrect: false },
                    { text: 'Λίμνη', isCorrect: false },
                ],
            },
        },
    });

    // Ερωτήσεις για Εθνικό Κήπο - Δύσκολες

    await prisma.question.create({
        data: {
            text: 'Ποιος ήταν ο αρχιτέκτονας που ανέλαβε την επίβλεψη της φύτευσης στον Εθνικό Κήπο;',
            difficulty: 'HARD',
            categoryId: nationalGarden.id,
            options: {
                create: [
                    { text: 'Τσίλερ', isCorrect: false },
                    { text: 'Χάνσεν', isCorrect: false },
                    { text: 'Σμίδεν', isCorrect: true },
                    { text: 'Καλλικράτης', isCorrect: false },
                ],
            },
        },
    });

    await prisma.question.create({
        data: {
            text: 'Ποια σημαντική αρχαιολογική δομή έχει βρεθεί μέσα στον Εθνικό Κήπο;',
            difficulty: 'HARD',
            categoryId: nationalGarden.id,
            options: {
                create: [
                    { text: 'Αγορά', isCorrect: false },
                    { text: 'Ρωμαϊκό υδραγωγείο', isCorrect: true },
                    { text: 'Μητρόπολη', isCorrect: false },
                    { text: 'Τάφος του Σωκράτη', isCorrect: false },
                ],
            },
        },
    });



    // Ερωτήσεις για Ζάππειο - Εύκολες
    await prisma.question.create({
        data: {
            text: 'Ποιος χρηματοδότησε την κατασκευή του Ζαππείου Μεγάρου;',
            difficulty: 'EASY',
            categoryId: zappeion.id,
            options: {
                create: [
                    { text: 'Ιωάννης Καποδίστριας', isCorrect: false },
                    { text: 'Ευάγγελος Ζάππας', isCorrect: true },
                    { text: 'Παύλος Μελάς', isCorrect: false },
                    { text: 'Αριστοτέλης Ωνάσης', isCorrect: false },
                ],
            },
        },
    });


    await prisma.question.create({
        data: {
            text: 'Σε ποιο είδος κτιρίου ανήκει το Ζάππειο;',
            difficulty: 'EASY',
            categoryId: zappeion.id,
            options: {
                create: [
                    { text: 'Στάδιο', isCorrect: false },
                    { text: 'Μέγαρο εκδηλώσεων', isCorrect: true },
                    { text: 'Εμπορικό κέντρο', isCorrect: false },
                    { text: 'Παλάτι', isCorrect: false },
                ],
            },
        },
    });

    await prisma.question.create({
        data: {
            text: 'Ποιο πάρκο βρίσκεται γύρω από το Ζάππειο;',
            difficulty: 'EASY',
            categoryId: zappeion.id,
            options: {
                create: [
                    { text: 'Πεδίον του Άρεως', isCorrect: false },
                    { text: 'Εθνικός Κήπος', isCorrect: true },
                    { text: 'Πάρκο Τρίτση', isCorrect: false },
                    { text: 'Πάρκο Φιλοθέης', isCorrect: false },
                ],
            },
        },
    });

    await prisma.question.create({
        data: {
            text: 'Ποιο μέρος του Ζαππείου απεικονίζεται;',
            difficulty: 'EASY',
            categoryId: zappeion.id,
            imageUrl: 'https://example.com/zappeion-columns.jpg', // αντικατάστησέ το
            options: {
                create: [
                    { text: 'Πίσω είσοδος', isCorrect: false },
                    { text: 'Κεντρική πρόσοψη με κίονες', isCorrect: true },
                    { text: 'Στάδιο', isCorrect: false },
                    { text: 'Αίθουσα τύπου', isCorrect: false },
                ],
            },
        },
    });

    await prisma.question.create({
        data: {
            text: 'Σε ποιο σημαντικό ιστορικό γεγονός χρησιμοποιήθηκε το Ζάππειο το 1896;',
            difficulty: 'EASY',
            categoryId: zappeion.id,
            options: {
                create: [
                    { text: 'Πόλεμος', isCorrect: false },
                    { text: 'Πρώτοι Ολυμπιακοί Αγώνες της νεότερης εποχής', isCorrect: true },
                    { text: 'Στέψη βασιλιά', isCorrect: false },
                    { text: 'Ανακήρυξη Συντάγματος', isCorrect: false },
                ],
            },
        },
    });


    // Ερωτήσεις για Ζάππειο - Μέτριας Δυσκολίας
    await prisma.question.create({
        data: {
            text: 'Ποιος ήταν ο αρχιτέκτονας του Ζαππείου Μεγάρου;',
            difficulty: 'MEDIUM',
            categoryId: zappeion.id,
            options: {
                create: [
                    { text: 'Κλέντσε', isCorrect: false },
                    { text: 'Τσίλερ', isCorrect: false },
                    { text: 'Θεόφιλος Χάνσεν', isCorrect: true },
                    { text: 'Καυτατζόγλου', isCorrect: false },
                ],
            },
        },
    });

    await prisma.question.create({
        data: {
            text: 'Πότε εγκαινιάστηκε το Ζάππειο Μέγαρο;',
            difficulty: 'MEDIUM',
            categoryId: zappeion.id,
            options: {
                create: [
                    { text: '1850', isCorrect: false },
                    { text: '1888', isCorrect: true },
                    { text: '1900', isCorrect: false },
                    { text: '1863', isCorrect: false },
                ],
            },
        },
    });

    await prisma.question.create({
        data: {
            text: 'Τι λειτουργίες εξυπηρετεί σήμερα το Ζάππειο;',
            difficulty: 'MEDIUM',
            categoryId: zappeion.id,
            options: {
                create: [
                    { text: 'Μουσείο', isCorrect: false },
                    { text: 'Εκθεσιακό και συνεδριακό κέντρο', isCorrect: true },
                    { text: 'Νοσοκομείο', isCorrect: false },
                    { text: 'Δικαστήριο', isCorrect: false },
                ],
            },
        },
    });

    // Ερωτήσεις για Ζάππειο - Δύσκολες

    await prisma.question.create({
        data: {
            text: 'Πόσες φορές χρηματοδότησε ο Ζάππας Ολυμπιακούς Αγώνες προτού πεθάνει;',
            difficulty: 'HARD',
            categoryId: zappeion.id,
            options: {
                create: [
                    { text: '1', isCorrect: false },
                    { text: '2', isCorrect: true },
                    { text: '3', isCorrect: false },
                    { text: 'Καμία', isCorrect: false },
                ],
            },
        },
    });

    await prisma.question.create({
        data: {
            text: 'Ποιος είναι ο ρόλος του περιστυλίου στο εσωτερικό του Ζαππείου;',
            difficulty: 'HARD',
            categoryId: zappeion.id,
            options: {
                create: [
                    { text: 'Είναι εκκλησία', isCorrect: false },
                    { text: 'Είναι η κεντρική αίθουσα εκθέσεων', isCorrect: false },
                    { text: 'Είναι χώρος τελετών και δεξιώσεων', isCorrect: true },
                    { text: 'Είναι χώρος στάθμευσης', isCorrect: false },
                ],
            },
        },
    });


    // Ερωτήσεις για Καλλιμάρμαρο - Εύκολες

    await prisma.question.create({
        data: {
            text: 'Τι σημαίνει το όνομα "Καλλιμάρμαρο";',
            difficulty: 'EASY',
            categoryId: kallimarmaro.id,
            options: {
                create: [
                    { text: 'Στάδιο της Καλλιθέας', isCorrect: false },
                    { text: 'Στάδιο από ωραίο μάρμαρο', isCorrect: true },
                    { text: 'Στάδιο για καλούς μαραθωνοδρόμους', isCorrect: false },
                    { text: 'Παναθηναϊκή Πλατεία', isCorrect: false },
                ],
            },
        },
    });

    await prisma.question.create({
        data: {
            text: 'Σε ποιους αγώνες χρησιμοποιήθηκε το Καλλιμάρμαρο το 1896;',
            difficulty: 'EASY',
            categoryId: kallimarmaro.id,
            options: {
                create: [
                    { text: 'Διεθνές Πρωτάθλημα', isCorrect: false },
                    { text: 'Ολυμπιακοί Αγώνες', isCorrect: true },
                    { text: 'Παναθήναια', isCorrect: false },
                    { text: 'Μαραθώνιος Πάτρας', isCorrect: false },
                ],
            },
        },
    });

    await prisma.question.create({
        data: {
            text: 'Τι υλικό χρησιμοποιήθηκε για την κατασκευή του Καλλιμάρμαρου;',
            difficulty: 'EASY',
            categoryId: kallimarmaro.id,
            options: {
                create: [
                    { text: 'Γρανίτης', isCorrect: false },
                    { text: 'Σκυρόδεμα', isCorrect: false },
                    { text: 'Πεντελικό μάρμαρο', isCorrect: true },
                    { text: 'Κεραμίδι', isCorrect: false },
                ],
            },
        },
    });

    await prisma.question.create({
        data: {
            text: 'Πώς αλλιώς ονομάζεται το Καλλιμάρμαρο;',
            difficulty: 'EASY',
            categoryId: kallimarmaro.id,
            options: {
                create: [
                    { text: 'Ρωμαϊκό στάδιο', isCorrect: false },
                    { text: 'Παναθηναϊκό Στάδιο', isCorrect: true },
                    { text: 'Στάδιο Καραϊσκάκη', isCorrect: false },
                    { text: 'Θέατρο Διονύσου', isCorrect: false },
                ],
            },
        },
    });

    await prisma.question.create({
        data: {
            text: 'Πού καταλήγει ο Αυθεντικός Μαραθώνιος της Αθήνας;',
            difficulty: 'EASY',
            categoryId: kallimarmaro.id,
            options: {
                create: [
                    { text: 'Ζάππειο', isCorrect: false },
                    { text: 'Εθνικός Κήπος', isCorrect: false },
                    { text: 'Καλλιμάρμαρο', isCorrect: true },
                    { text: 'Σύνταγμα', isCorrect: false },
                ],
            },
        },
    });

    // Ερωτήσεις για Καλλιμάρμαρο - Μέτριες

    await prisma.question.create({
        data: {
            text: 'Ποιος ανακαίνισε το Καλλιμάρμαρο για τους πρώτους Ολυμπιακούς Αγώνες;',
            difficulty: 'MEDIUM',
            categoryId: kallimarmaro.id,
            options: {
                create: [
                    { text: 'Ευάγγελος Ζάππας', isCorrect: false },
                    { text: 'Δημήτριος Βικέλας', isCorrect: false },
                    { text: 'Γεώργιος Αβέρωφ', isCorrect: true },
                    { text: 'Πιερ ντε Κουμπερτέν', isCorrect: false },
                ],
            },
        },
    });

    await prisma.question.create({
        data: {
            text: 'Ποιο αρχαίο φεστιβάλ λάμβανε χώρα στο αρχικό στάδιο πριν την ανακατασκευή;',
            difficulty: 'MEDIUM',
            categoryId: kallimarmaro.id,
            options: {
                create: [
                    { text: 'Ορφικά', isCorrect: false },
                    { text: 'Παναθήναια', isCorrect: true },
                    { text: 'Μυστηριακά', isCorrect: false },
                    { text: 'Ηλέσια', isCorrect: false },
                ],
            },
        },
    });

    await prisma.question.create({
        data: {
            text: 'Ποια είναι η χωρητικότητα του σύγχρονου σταδίου;',
            difficulty: 'MEDIUM',
            categoryId: kallimarmaro.id,
            options: {
                create: [
                    { text: '5.000', isCorrect: false },
                    { text: '20.000', isCorrect: false },
                    { text: '45.000', isCorrect: true },
                    { text: '100.000', isCorrect: false },
                ],
            },
        },
    });


    // Ερωτήσεις για Καλλιμάρμαρο - Δύσκολες

    await prisma.question.create({
        data: {
            text: 'Ποια είναι η μοναδικότητα του Καλλιμάρμαρου παγκοσμίως;',
            difficulty: 'HARD',
            categoryId: kallimarmaro.id,
            options: {
                create: [
                    { text: 'Είναι υπόγειο', isCorrect: false },
                    { text: 'Είναι εξ ολοκλήρου φτιαγμένο από μάρμαρο', isCorrect: true },
                    { text: 'Δεν έχει καθίσματα', isCorrect: false },
                    { text: 'Είναι το παλαιότερο', isCorrect: false },
                ],
            },
        },
    });

    await prisma.question.create({
        data: {
            text: 'Ποιον αιώνα πρωτοκατασκευάστηκε το αρχαίο στάδιο;',
            difficulty: 'HARD',
            categoryId: kallimarmaro.id,
            options: {
                create: [
                    { text: '5ος π.Χ.', isCorrect: false },
                    { text: '4ος π.Χ.', isCorrect: true },
                    { text: '2ος μ.Χ.', isCorrect: false },
                    { text: '1ος π.Χ.', isCorrect: false },
                ],
            },
        },
    });

}

main()
    .then(() => prisma.$disconnect())
    .catch(async (e) => {
        console.error(e);
        await prisma.$disconnect();
        process.exit(1);
    });
