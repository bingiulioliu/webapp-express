-- Popolazione tabella products
INSERT INTO `products` (`id`, `name`, `price`, `description`, `available`, `in_stock`, `ingredient`, `updated_at`, `created_at`, `image`) VALUES
-- PATATINE FRITTE (Classiche e varianti da friggere/airfryer)
(1, 'Patatine Fritte Classiche', 1.99, 'Il grande classico: taglio regolare, dorate e croccanti.', 1, 1500, 'Patate, olio di semi di girasole', NOW(), NOW(), 'fritte_classiche.jpg'),
(2, 'Patatine Fritte Taglio Spesso', 2.20, 'Più polpose all\'interno e super croccanti fuori.', 1, 900, 'Patate, olio di semi di girasole', NOW(), NOW(), 'fritte_spesse.jpg'),
(3, 'Patatine Fritte Ondulate', 2.10, 'Taglio a zig-zag divertente, ideale per trattenere le salse.', 1, 800, 'Patate, olio di semi di girasole', NOW(), NOW(), 'fritte_ondulate.jpg'),
(4, 'Patatine Fritte Fiammifero', 2.30, 'Sottilissime e veloci da cuocere, massima croccantezza.', 1, 600, 'Patate, olio di semi di girasole', NOW(), NOW(), 'fritte_fiammifero.jpg'),
(5, 'Patatine Fritte a Spirale', 2.99, 'Divertente taglio a twist, perfetto per i bambini e feste.', 1, 400, 'Patate, olio di semi di girasole, sale', NOW(), NOW(), 'fritte_spirale.jpg'),
(6, 'Patatine Fritte Dolci (Batatas)', 3.49, 'Fatte con patate dolci americane, retrogusto zuccherino.', 1, 500, 'Patate dolci, olio di semi di girasole', NOW(), NOW(), 'fritte_dolci.jpg'),
(7, 'Chips Fritte Artigianali XL', 2.50, 'Sacchetto di patatine fritte stile snack, taglio sottile.', 1, 1200, 'Patate, olio di alta qualità, sale', NOW(), NOW(), 'chips_artigianali.jpg'),

-- PATATINE RUSTICHE (Con buccia, tagli irregolari, speziate)
(8, 'Patate Rustiche a Spicchi', 2.40, 'Spicchi grandi con buccia, perfetti come contorno pub.', 1, 1100, 'Patate con buccia, olio di girasole', NOW(), NOW(), 'rustiche_spicchi.jpg'),
(9, 'Patate Rustiche alla Paprika dolce', 2.60, 'Spicchi rustici ricoperti da una speziatura alla paprika.', 1, 750, 'Patate, olio, paprika, sale, estratto di lievito', NOW(), NOW(), 'rustiche_paprika.jpg'),
(10, 'Patate Rustiche Erbe e Aglio', 2.65, 'Taglio rustico condito con un mix aromati di aglio e timo.', 1, 650, 'Patate, olio, aglio disidratato, timo, origano', NOW(), NOW(), 'rustiche_erbe.jpg'),
(11, 'Patate Rustiche Schiacciate', 2.80, 'Patate intere bollite e poi schiacciate, pronte da arrostire.', 1, 350, 'Patate con buccia, sale', NOW(), NOW(), 'rustiche_schiacciate.jpg'),
(12, 'Patate Rustiche Taglio Dipper', 2.70, 'Forma a barchetta, create appositamente per raccogliere salse.', 1, 850, 'Patate, olio di semi di girasole, amido di patata', NOW(), NOW(), 'rustiche_dipper.jpg'),
(13, 'Patate Rustiche al Tartufo Nero', 3.99, 'Spicchi rustici premium aromatizzati al tartufo.', 1, 250, 'Patate, olio, aroma di tartufo nero, prezzemolo', NOW(), NOW(), 'rustiche_tartufo.jpg'),

-- PATATINE AL FORNO (Cubetti, condimenti tradizionali, ricette pronte)
(14, 'Patate al Forno con Rosmarino', 2.15, 'I classici cubetti della domenica conditi con rosmarino.', 1, 1400, 'Patate, olio extravergine d\'oliva, rosmarino, aglio', NOW(), NOW(), 'forno_rosmarino.jpg'),
(15, 'Patate al Forno Cubettate Light', 2.25, 'Pre-cotte a vapore, con pochissimi grassi aggiunti.', 1, 950, 'Patate, olio di girasole 2%, sale', NOW(), NOW(), 'forno_light.jpg'),
(16, 'Patate al Forno con Pancetta', 3.10, 'Arricchite con cubetti di pancetta affumicata croccante.', 1, 450, 'Patate, pancetta suina affumicata, olio, aromi', NOW(), NOW(), 'forno_pancetta.jpg'),
(17, 'Patate al Forno alla Cacciatora', 2.90, 'Condite con pomodoro, olive nere e un tocco di vino bianco.', 1, 300, 'Patate, pomodoro, olive, olio, spezie', NOW(), NOW(), 'forno_cacciatora.jpg'),
(18, 'Patate Novelle al Forno Intere', 2.45, 'Patatine novelle intere di piccola taglia, morbidissime dentro.', 1, 700, 'Patate novelle, olio EVO, sale, pepe', NOW(), NOW(), 'forno_novelle.jpg'),
(19, 'Patate al Forno Cacio e Pepe', 3.20, 'Ispirate alla tradizione romana, con pecorino e pepe nero.', 1, 400, 'Patate, formaggio pecorino romano, pepe nero, olio', NOW(), NOW(), 'forno_cacio_pepe.jpg'),
(20, 'Patate al Forno Suprema ai Formaggi', 3.50, 'Teglia pronta con mix di formaggi fusi e burro.', 1, 200, 'Patate, mozzarella, provola, burro, erba cipollina', NOW(), NOW(), 'forno_formaggi.jpg');


-- Popolazione reviwes
INSERT INTO `reviews` (`product_id`, `name`, `text_review`, `rating`, `title`) VALUES
-- Prodotto 1
(1, 'Marco_P1_1', 'Gnocchi fantastici, non si sfaldano.', '5', 'Eccellenti per gnocchi'),
(1, 'Anna_P1_2', 'Buone ma un po care.', '4', 'Qualità alta'),
(1, 'Luca_P1_3', 'Arrivate vecchie e con i germogli.', '2', 'Poco fresche'),
(1, 'Sara_P1_4', 'Ottima consistenza al forno.', '5', 'Consigliatissime'),
(1, 'Paolo_P1_5', 'Patate normalissime, niente di che.', '3', 'Nella media'),
(1, 'Elena_P1_6', 'Il top per la cucina tradizionale.', '5', 'Superbe'),
(1, 'Giulio_P1_7', 'Sapore terroso ottimo.', '4', 'Buon sapore'),
(1, 'Sofia_P1_8', 'Pacco arrivato bagnato.', '3', 'Problema spedizione'),
(1, 'Diego_P1_9', 'Le ricomprerò sicuramente.', '5', 'Ottimo acquisto'),
(1, 'Chiara_P1_10', 'Pelle un po dura da pelare.', '4', 'Buone ma dure'),

-- Prodotto 2
(2, 'Matteo_P2_1', 'Piccoline e saporite al punto giusto.', '5', 'Squisite'),
(2, 'Martina_P2_2', 'Cotte con la buccia al rosmarino, una delizia.', '5', 'Perfette per la teglia'),
(2, 'Stefano_P2_3', 'Alcune erano ammaccate.', '3', 'Così così'),
(2, 'Francesca_P2_4', 'Dolci ed economiche.', '4', 'Buon rapporto qualità prezzo'),
(2, 'Davide_P2_5', 'Si cuociono in un attimo.', '5', 'Veloci e buone'),
(2, 'Giorgia_P2_6', 'Non mi hanno fatto impazzire.', '3', 'Anonime'),
(2, 'Alessandro_P2_7', 'Le preferite dei miei figli.', '5', 'Approvate dai bambini'),
(2, 'Alice_P2_8', 'Prezzo onesto per la qualità.', '4', 'Consigliate'),
(2, 'Federico_P2_9', 'Arrivate in tempo per la cena.', '5', 'Servizio rapido'),
(2, 'Valentina_P2_10', 'Ottime nella friggitrice ad aria.', '4', 'Perfette in airfryer'),

-- Prodotto 3
(3, 'Filippo_P3_1', 'Colore spettacolare nei piatti!', '5', 'Effetto WOW'),
(3, 'Beatrice_P3_2', 'Hanno un retrogusto di nocciola molto particolare.', '4', 'Particolari'),
(3, 'Edoardo_P3_3', 'Troppo costose per i miei gusti.', '2', 'Prezzo esagerato'),
(3, 'Aurora_P3_4', 'Purè viola fantastico fatto per i bambini.', '5', 'Divertenti e buone'),
(3, 'Lorenzo_P3_5', 'Un po troppo farinose.', '3', 'Consistenza strana'),
(3, 'Vittoria_P3_6', 'Una vera prelibatezza da chef.', '5', 'Raffinate'),
(3, 'Tommaso_P3_7', 'Difficili da trovare altrove.', '4', 'Rarità'),
(3, 'Emma_P3_8', 'Sapore delicato.', '4', 'Buone'),
(3, 'Riccardo_P3_9', 'Deluso dal sapore, pensavo meglio.', '2', 'Solo apparenza'),
(3, 'Ludovica_P3_10', 'Insalata di patate coloratissima!', '5', 'Bellissime'),

-- Prodotto 4
(4, 'Gabriele_P4_1', 'Dolci, perfette per fare le fritte americane.', '5', 'Super dolci'),
(4, 'Camilla_P4_2', 'Ottima qualità di batate.', '4', 'Buona batata'),
(4, 'Christian_P4_3', 'Molto grandi, ne basta una per fare un pasto.', '5', 'Giganti!'),
(4, 'Giulia_P4_4', 'Pelle un po troppo rovinata.', '3', 'Estetica da migliorare'),
(4, 'Pietro_P4_5', 'Sapore ottimo fatte al cartoccio.', '5', 'Spaziali al cartoccio'),
(4, 'Gaia_P4_6', 'Non mi piace il dolce nei piatti salati.', '2', 'Troppo dolci per me'),
(4, 'Simone_P4_7', 'Ottimo sostituto della patata classica.', '4', 'Nutrienti'),
(4, 'Alessia_P4_8', 'Arrivate fresche e sode.', '5', 'Freschissime'),
(4, 'Andrea_P4_9', 'Un po care rispetto al supermercato.', '3', 'Care'),
(4, 'Nicole_P4_10', 'Ci faccio delle vellutate strepitose.', '5', 'Ideali per vellutate'),

-- Prodotto 5
(5, 'Manuel_P5_1', 'La patata da tutti i giorni, non delude mai.', '4', 'Una certezza'),
(5, 'Rebecca_P5_2', 'Prezzo super conveniente.', '5', 'Economiche e buone'),
(5, 'Jacopo_P5_3', 'Un classico per il purè.', '4', 'Buone per purè'),
(5, 'Melissa_P5_4', 'Pacco da 5kg conveniente.', '5', 'Ottimo formato'),
(5, 'Mattia_P5_5', 'Niente di speciale, classiche patate.', '3', 'Standard'),
(5, 'Greta_P5_6', 'Molto pulite, senza troppa terra.', '4', 'Ben pulite'),
(5, 'Emanuele_P5_7', 'Ideali fritte in padella.', '5', 'Ottime fritte'),
(5, 'Cecilia_P5_8', 'Ne ho trovate due marce dentro.', '2', 'Controllare meglio'),
(5, 'Daniele_P5_9', 'Buona tenuta in cottura.', '4', 'Soddisfatto'),
(5, 'Elena_P5_10', 'Le compro ogni settimana.', '5', 'Immancabili'),

-- Prodotto 6
(6, 'Samuele_P6_1', 'Il marchio IGP si sente tutto, sapore ricco.', '5', 'Autentica Sila'),
(6, 'Asia_P6_2', 'Molto asciutte, perfette per friggere.', '5', 'Frittura croccante'),
(6, 'Valerio_P6_3', 'Prezzo un po alto ma li vale.', '4', 'Qualità premium'),
(6, 'Viola_P6_4', 'Sapore di montagna unico.', '5', 'Gusto eccellente'),
(6, 'Fabio_P6_5', 'Buone ma la pezzatura è irregolare.', '3', 'Misure diverse'),
(6, 'Ambra_P6_6', 'La miglior patata d’Italia.', '5', 'Insuperabili'),
(6, 'Giacomo_P6_7', 'Ottima per fare la pasta e patate.', '5', 'Tradizione azzeccata'),
(6, 'Ilaria_P6_8', 'Soddisfatta della freschezza.', '4', 'Fresche'),
(6, 'Christian_P6_9', 'La buccia viene via facilmente.', '4', 'Facili da pelare'),
(6, 'Marta_P6_10', 'Pacco arrivato in ritardo.', '3', 'Ritardo consegna'),

-- Prodotto 7
(7, 'Claudio_P7_1', 'Morbidi e saporiti, sanno di vera patata.', '5', 'Come fatti in casa'),
(7, 'Serena_P7_2', 'Non diventano collosi durante la cottura.', '5', 'Ottima consistenza'),
(7, 'Roberto_P7_3', 'Porzione un po ridotta per due persone.', '3', 'Porzione scarsa'),
(7, 'Arianna_P7_4', 'Velocissimi da cuocere, ottimi col pesto.', '4', 'Pratici e buoni'),
(7, 'Michele_P7_5', 'Un po troppo cari per essere gnocchi confezionati.', '3', 'Caro il prezzo'),
(7, 'Silvia_P7_6', 'Squisiti con una semplice salsa di pomodoro.', '5', 'Semplicemente squisiti'),
(7, 'Leonardo_P7_7', 'Hanno la consistenza perfetta, non si sfaldano.', '5', 'Approvati'),
(7, 'Anita_P7_8', 'Ottimo prodotto fresco da tenere in frigo.', '4', 'Freschi e genuini'),
(7, 'Alex_P7_9', 'Ingredienti puliti, senza troppi conservanti.', '5', 'Ottimi ingredienti'),
(7, 'Elisa_P7_10', 'Un po troppo compatti per i miei gusti.', '3', 'Un po duri'),

-- Prodotto 8
(8, 'Enrico_P8_1', 'Il profumo di tartufo si sente appena apri il sacchetto.', '5', 'Aroma fantastico'),
(8, 'Rachele_P8_2', 'Molto croccanti e non troppo unte.', '4', 'Croccanti e sfiziose'),
(8, 'Walter_P8_3', 'Il sapore di tartufo è troppo chimico.', '2', 'Gusto artificiale'),
(8, 'Miriam_P8_4', 'Perfette per un aperitivo elegante a casa.', '5', 'Aperitivo top'),
(8, 'Gianluca_P8_5', 'Buone ma il sacchetto è mezzo vuoto.', '3', 'Troppa aria nel sacchetto'),
(8, 'Nadia_P8_6', 'Squisite! Una tira l’altra.', '5', 'Droga legale'),
(8, 'Domenico_P8_7', 'Ottima salatura, non esagerata.', '4', 'Salate giuste'),
(8, 'Erika_P8_8', 'Prezzo elevato per la quantità.', '3', 'Poche dentro'),
(8, 'Fabrizio_P8_9', 'Veramente un ottimo snack gourmet.', '5', 'Gourmet vero'),
(8, 'Noemi_P8_10', 'Un po troppo spezzettate sul fondo.', '3', 'Molte briciole'),

-- Prodotto 9
(9, 'Antonio_P9_1', 'Ideale quando si ha fretta, si fa in 2 minuti.', '4', 'Super veloce'),
(9, 'Roberta_P9_2', 'Sapore buono se si aggiunge tanto parmigiano e burro.', '4', 'Senza lode senza infamia'),
(9, 'Salvatore_P9_3', 'Consistenza un po artificiale.', '2', 'Troppo industriale'),
(9, 'Tiziana_P9_4', 'Igienico e comodo da tenere in dispensa.', '5', 'Comodissimo'),
(9, 'Giovanni_P9_5', 'Rapporto qualità prezzo imbattibile.', '4', 'Economico'),
(9, 'Letizia,P9_6', 'I bambini lo adorano.', '5', 'Salva cena'),
(9, 'Pasquale_P9_7', 'Grumi difficili da sciogliere.', '3', 'Fa i grumi'),
(9, 'Cinzia_P9_8', 'Molto pratico per addensare le zuppe.', '5', 'Ottimo addensante'),
(9, 'Vincenzo_P9_9', 'Sapore neutro, va condito bene.', '3', 'Neutro'),
(9, 'Marina_P9_10', 'Prodotto classico che non delude.', '4', 'Buon purè'),

-- Prodotto 10
(10, 'Carmine_P10_1', 'Spicchi grandi e speziati benissimo.', '5', 'Saporitissime'),
(10, 'Manuela_P10_2', 'Fatte al forno diventano croccantissime.', '5', 'Super croccanti'),
(10, 'Raffaele_P10_3', 'Un po troppo piccanti per i bambini.', '3', 'Un po piccanti'),
(10, 'Luana_P10_4', 'Surgelate perfettamente, non fanno blocco unico.', '4', 'Ottimo surgelato'),
(10, 'Angelo_P10_5', 'Si risparmia un sacco di tempo invece di tagliarle.', '5', 'Comode'),
(10, 'Rosa_P10_6', 'Un po troppo sale per i miei gusti.', '3', 'Troppo saporite'),
(10, 'Biagio_P10_7', 'Contorno perfetto per gli hamburger.', '5', 'Da pub'),
(10, 'Patrizia_P10_8', 'Ottima doratura in forno ventilato.', '4', 'Belle dorate'),
(10, 'Emilio_P10_9', 'Prezzo ok per la comodità.', '4', 'Buon prezzo'),
(10, 'Sabrina_P10_10', 'Rimangono un po molli se fatte al microonde.', '2', 'No al microonde'),

-- Prodotto 11
(11, 'Ezio_P11_1', 'Le vere patate belghe, fritte sono insuperabili.', '5', 'Top per friggere'),
(11, 'Daniela_P11_2', 'Assorbono pochissimo olio.', '5', 'Asciutte e leggere'),
(11, 'Bruno_P11_3', 'La buccia è un po difficile da levare.', '3', 'Faticose da pelare'),
(11, 'Lucia_P11_4', 'Ottima consistenza dorata esterna.', '4', 'Bel colore croccante'),
(11, 'Cesare_P11_5', 'Sacco arrivato con un po di terra, ma normali.', '4', 'Natura vera'),
(11, 'Rossella_P11_6', 'Sapore autentico, dolciastre al punto giusto.', '5', 'Sapore unico'),
(11, 'Alfonso_P11_7', 'Ottima pezzatura medio-grande.', '4', 'Belle grandi'),
(11, 'Giusy_P11_8', 'Non adatte da fare bollite.', '3', 'Solo da friggere'),
(11, 'Renato_P11_9', 'Prezzo ottimo per la qualità belga.', '5', 'Ottimo affare'),
(11, 'Nunzia_P11_10', 'Prodotto eccellente per il mio ristorante.', '5', 'Qualità da ristorazione'),

-- Prodotto 12
(12, 'Luigi_P12_1', 'Filano che è un piacere, mozzarella ottima.', '5', 'Filanti e golose'),
(12, 'Monica_P12_2', 'Fritte sono una bomba, ma pesanti.', '4', 'Pesanti ma divine'),
(12, 'Gianni_P12_3', 'La panatura si stacca in cottura.', '2', 'Panatura debole'),
(12, 'Debora_P12_4', 'Aperitivo pronto in 10 minuti di forno.', '5', 'Praticissime'),
(12, 'Massimo_P12_5', 'Poche crocchette nella confezione.', '3', 'Pacco piccolo'),
(12, 'Teresa_P12_6', 'Il purè interno è liscio e senza grumi.', '5', 'Ottimo ripieno'),
(12, 'Alba_P12_7', 'Ben speziate, sapore delicato.', '4', 'Saporite'),
(12, 'Dino_P12_8', 'Ottimo snack da tenere sempre in freezer.', '4', 'Comode in freezer'),
(12, 'Pina_P12_9', 'Troppo fritte fanno male, ma queste al forno meritano.', '5', 'Ottime al forno'),
(12, 'Nello_P12_10', 'Mozzarella quasi inesistente in alcune.', '2', 'Poca mozzarella'),

-- Prodotto 13
(13, 'Sandro_P13_1', 'La DOP di Bologna non si smentisce mai.', '5', 'Certificata e ottima'),
(13, 'Clara_P13_2', 'Polpa gialla bellissima, ideali per insalate.', '5', 'Giallo intenso'),
(13, 'Guido_P13_3', 'Un po costose ma la qualità si paga.', '4', 'Prezzo da DOP'),
(13, 'Ester_P13_4', 'Sapore pulito, ottime al vapore.', '5', 'Delicate al vapore'),
(13, 'Ugo_P13_5', 'Arrivato un sacco sporchissimo.', '3', 'Troppa terra nel sacco'),
(13, 'Irma_P13_6', 'Patata eccellente per ogni tipo di cottura.', '5', 'Tuttofare eccellente'),
(13, 'Leo_P13_7', 'Consistenza molto soda.', '4', 'Soda e compatta'),
(13, 'Olga_P13_8', 'Molto resistenti, durano tanto in dispensa.', '5', 'Lunga conservazione'),
(13, 'Ennio_P13_9', 'Niente di speciale rispetto ad altre marche.', '3', 'Sopravvalutate'),
(13, 'Lara_P13_10', 'Spedizione puntuale, patate intatte.', '4', 'Ottimo servizio'),

-- Prodotto 14
(14, 'Nino_P14_1', 'Kennebec ottime per fare le patate al forno croccanti.', '5', 'Top per il forno'),
(14, 'Rita_P14_2', 'Prezzo imbattibile sul sito.', '5', 'Ottimo prezzo'),
(14, 'Gino_P14_3', 'Alcune patate erano molto piccole.', '3', 'Pezzatura mista'),
(14, 'Piera_P14_4', 'Polpa farinosa ottima per purè o gnocchi.', '4', 'Versatili'),
(14, 'Vito_P14_5', 'Si conservano bene al buio.', '4', 'Durevoli'),
(14, 'Lina_P14_6', 'Prodotto standard di buona qualità.', '4', 'Buone'),
(14, 'Aldo_P14_7', 'Sapore eccellente cotte sotto la cenere.', '5', 'Tradizionali'),
(14, 'Mara_P14_8', 'Soddisfatta dell acquisto.', '4', 'Ok tutto'),
(14, 'Remo_P14_9', 'Alcune avevano macchie nere all interno.', '2', 'Macchiate'),
(14, 'Vanna_P14_10', 'Spedizione rapida e imballo ecologico.', '5', 'Ottimo imballo'),

-- Prodotto 15
(15, 'Berto_P15_1', 'Comodissime quando torni stanco dal lavoro.', '5', 'Salva-tempo definitivo'),
(15, 'Gilda_P15_2', 'Gusto della salamoia un po troppo forte.', '3', 'Un po salate'),
(15, 'Duccio_P15_3', 'Gia pronte da tagliare e buttare in padella.', '4', 'Praticità unica'),
(15, 'Fiore_P15_4', 'Consistenza ottima, rimangono sode.', '4', 'Sode pur essendo in barattolo'),
(15, 'Leda_P15_5', 'Idea geniale per single.', '5', 'Ottima idea'),
(15, 'Livio_P15_6', 'Un po chimiche come sapore di conservazione.', '2', 'Gusto industriale'),
(15, 'Clelia_P15_7', 'Prezzo economico per la comodità.', '4', 'Prezzo onesto'),
(15, 'Zeno_P15_8', 'Perfette per insalata russa veloce.', '5', 'Ottime per insalata russa'),
(15, 'Oria_P15_9', 'Niente male, meglio delle aspettative.', '4', 'Sorpresa positiva'),
(15, 'Miro_P15_10', 'Lattina arrivata ammaccata.', '3', 'Packaging danneggiato'),

-- Prodotto 16
(16, 'Omar_P16_1', 'La focaccia è morbidissima e ricca di patate.', '5', 'Focaccia da sogno'),
(16, 'Amelia_P16_2', 'Il rosmarino sopra dà un profumo eccezionale.', '5', 'Profumatissima'),
(16, 'Ivan_P16_3', 'Un po unta sul fondo del cartone.', '3', 'Un po troppo olio'),
(16, 'Lidia_P16_4', 'Riscaldata due minuti al forno torna fragrante.', '4', 'Ottima scaldata'),
(16, 'Yuri_P16_5', 'Porzione generosa, ottima per cena.', '5', 'Bella grande'),
(16, 'Nadia_P16_6', 'Impasto leggero e digeribile.', '4', 'Leggera'),
(16, 'Igor_P16_7', 'Prezzo alto per essere una focaccia.', '3', 'Cara'),
(16, 'Sonia_P16_8', 'Sapore pugliese autentico a casa mia.', '5', 'Come a Bari'),
(16, 'Alex_P16_9', 'Arrivata fredda, ma buona lo stesso.', '4', 'Buona anche fredda'),
(16, 'Tania_P16_10', 'Manca un pizzico di sale nell impasto.', '3', 'Sciapa'),

-- Prodotto 17
(17, 'Mirko_P17_1', 'Colore viola ube brillante, spettacolare per i dolci.', '5', 'Stupendo colore ube'),
(17, 'Flora_P17_2', 'Molto più dolce della patata americana classica.', '4', 'Dolcissima ed esotica'),
(17, 'Loris_P17_3', 'Molto difficile da cucinare senza farla sfaldare.', '3', 'Delicata'),
(17, 'Wanda_P17_4', 'Ci ho fatto dei pancake viola pazzeschi.', '5', 'Ideale per pancake sani'),
(17, 'Amedeo_P17_5', 'Prezzo esorbitante ma introvabile altrove.', '4', 'Prezzo da pezzo raro'),
(17, 'Tullio_P17_6', 'Gusto esotico fantastico.', '5', 'Sapore unico tropicale'),
(17, 'Daria_P17_7', 'Pacco arrivato un po schiacciato.', '3', 'Imballaggio migliorabile'),
(17, 'Siria_P17_8', 'Ottima consistenza cremosa nelle torte.', '5', 'Perfetta per dolci'),
(17, 'Elio_P17_9', 'Gusto troppo strano per i miei standard.', '2', 'Troppo particolare'),
(17, 'Milena_P17_10', 'Freschezza garantita, ottima qualità.', '5', 'Qualità eccellente'),

-- Prodotto 18
(18, 'Gino_P18_1', 'Condimento perfetto, pronte da infornare subito.', '5', 'Massima comodità'),
(18, 'Pina_P18_2', 'Il rosmarino è fresco e non secco.', '5', 'Rosmarino profumato'),
(18, 'Rino_P18_3', 'Troppo aglio per i miei gusti.', '3', 'Molto aglio'),
(18, 'Vina_P18_4', 'Diventano belle dorate e croccanti fuori.', '4', 'Ottimo risultato'),
(18, 'Tina_P18_5', 'Ottimo contorno per l’arrosto della domenica.', '5', 'Contorno classico rapido'),
(18, 'Dino_P18_6', 'Un po troppo unte nella confezione.', '3', 'Troppo olio pre-inserito'),
(18, 'Lino_P18_7', 'Porzione perfetta per tre persone.', '4', 'Buon formato'),
(18, 'Mina_P18_8', 'Prezzo super conveniente in offerta.', '5', 'Prezzo shock'),
(18, 'Nino_P18_9', 'Alcuni pezzi erano tagliati troppo grandi.', '3', 'Taglio irregolare'),
(18, 'Zina_P18_10', 'Le ricomprerò sicuramente per Natale.', '5', 'Salva pranzo festivo'),

-- Prodotto 19
(19, 'Umberto_P19_1', 'Chips croccantissime, non deludono mai la marca.', '5', 'Classico intramontabile'),
(19, 'Vanna_P19_2', 'Formato XL fantastico per i film sul divano.', '5', 'Formato cinema'),
(19, 'Zelia_P19_3', 'Troppo sale, mette un sacco di sete.', '3', 'Salatissime'),
(19, 'Alvise_P19_4', 'Poche patatine rotte nel sacchetto grande.', '4', 'Patatine intere'),
(19, 'Bruna_P19_5', 'Unte al punto giusto, saporite.', '4', 'Gusto pieno'),
(19, 'Carlo_P19_6', 'Prezzo conveniente rispetto ai bar.', '4', 'Ottimo prezzo'),
(19, 'Dora_P19_7', 'Sacchetto arrivato leggermente sgonfio.', '3', 'Perdità d aria'),
(19, 'Ennio_P19_8', 'Adoro lo spessore di queste chips.', '5', 'Spessore perfetto'),
(19, 'Fosca_P19_9', 'Snack ideale per le feste di compleanno.', '5', 'Festa assicurata'),
(19, 'Gaddo_P19_10', 'Preferisco quelle senza sale, ma buone.', '3', 'Classiche'),

-- Prodotto 20
(20, 'Gelasio_P20_1', 'Vellutata calda fantastica in inverno.', '5', 'Molto confortante'),
(20, 'Ida_P20_2', 'Il porro si sente bene e si sposa con le patate.', '5', 'Abbinamento perfetto'),
(20, 'Lea_P20_3', 'Porzione un po piccola per un adulto affamato.', '3', 'Quantità da rivedere'),
(20, 'Manlio_P20_4', 'Sana, pronta in microonde in pochi minuti.', '4', 'Veloce e sana'),
(20, 'Nerio_P20_5', 'Gusto naturale, sembra fatta in casa.', '5', 'Genuina'),
(20, 'Orio_P20_6', 'Un po troppo liquida per i miei gusti.', '3', 'Troppo liquida'),
(20, 'Pia_P20_7', 'Ottimi ingredienti, senza conservanti strani.', '4', 'Etichetta pulita'),
(20, 'Quinto_P20_8', 'Prezzo leggermente alto per una zuppa.', '3', 'Un po cara'),
(20, 'Rina_P20_9', 'Comodissima da portare in ufficio.', '5', 'Pranzo da ufficio top'),
(20, 'Sisto_P20_10', 'Manca un po di sale, ma basta aggiungerlo.', '4', 'Da regolare di sale');


-- Aggiungo la colonna created_at per avere la data
ALTER TABLE `reviews` 
ADD COLUMN `created_at` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP;


-- Aumento il numero massimo di recensioni da tinyint a int
ALTER TABLE reviews MODIFY id INT AUTO_INCREMENT;

-- Popolazione category_product
INSERT INTO category_product (product_id, category_id) VALUES
-- Categoria 1: Novità (Prodotti 1, 3, 17, 20)
(1, 1), (3, 1), (17, 1), (20, 1),
-- Categoria 2: Più Venduti (Prodotti 2, 7, 8, 12, 19)
(2, 2), (7, 2), (8, 2), (12, 2), (19, 2),
-- Categoria 3: Biologico (Prodotti 1, 4, 6, 13)
(1, 3), (4, 3), (6, 3), (13, 3),
-- Categoria 4: In Offerta (Prodotti 5, 9, 14, 15)
(5, 4), (9, 4), (14, 4), (15, 4),
-- Categoria 5: Specialità Locali (Prodotti 1, 6, 13, 16, 18)
(1, 5), (6, 5), (13, 5), (16, 5), (18, 5);

-- Popolazione categories
INSERT INTO categories (id, name, description) VALUES
(1, 'Novità', 'Le ultime varietà di patate arrivate in magazzino.'),
(2, 'Più Venduti', 'I prodotti a base di patate preferiti dai nostri clienti.'),
(3, 'Biologico', "Patate coltivate senza l'uso di pesticidi chimici."),
(4, 'In Offerta', 'Prezzi stracciati per fare scorta.'),
(5, 'Specialità Locali', 'Patate tradizionali provenienti da regioni protette (DOP/IGP).');
