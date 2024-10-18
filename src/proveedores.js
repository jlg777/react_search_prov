const proveedores = [
  {
    nombre: 'ABEL A. CANGIALOSI Y JOSE L. CANGIALOSI SH',
    correo: 'noeliacangialosi@gmail.com',
    correo2: 'transportecangialosi@yahoo.com.ar'
  },
  {
    nombre: 'ACCOR HOSPITALITY ARGENTINA S.A',
    correo: 'carolina.ufano@accor.com'
  },
  { nombre: 'ACEROS CUYO', correo: 'ventas@aceroscuyosrl.com.ar' },
  { nombre: 'ACLIA', correo: 'maderas.iguazu2019@gmail.com' },
  { nombre: 'AGROMAQ SAN JUAN S.A', correo: 'kevmartinez@agromaqsanjuan.com', correo2: 'agromaqsanjuan@gmail.com' },
  {
    nombre: 'AGRO COSECHA',
    correo: 'administracion1@agrocosecha.com.ar',
    correo2: 'administracion@agrocosecha.com.ar'
  },
  {
    nombre: 'AGUA Y SANEAMIENTO MENDOZA',
    correo: 'emercado@aysam.com.ar',
    correo2: 'grandesclientes@aysam.com.ar'
  },
  { nombre: 'AGUIRRE JORGE ALBERTO', correo: 'crjaguirre@gmail.com' },
  { nombre: 'AISLANTES DE CUYO S.A', correo: 'aiscuyo@speedy.com.ar' },
  { nombre: 'ALONSO HECTOR GUSTAVO', correo: 'halonso@amr-asociados.com.ar' },
  { nombre: 'ALPER QUIMICA', correo: 'domingo@alperquimica.com.ar' },
  { nombre: 'ALTEC SAN LUIS S.A', correo: 'c.roncayoli@grupoaltec.com.ar' },
  {
    nombre: 'ANDRES MERINO PINTURERIAS S.A',
    correo: 'laura@andres-merino.com.ar',
    correo2: 'florencia@andres-merino.com.ar'
  },
  { nombre: 'ANKU S.R.L', correo: 'dielec.me@gmail.com' },
  {
    nombre: 'APARICIO RICARDO',
    correo: 'administracion2@ricardoaparicio.com.ar'
  },
  { nombre: 'ARDISON SOFTWARE S.R.L', correo: 'jguillaume@ardison.com' },
  { nombre: 'AREOPAGO S.A', correo: 'daniel@areopagosa.com.ar' },
  { nombre: 'ARGESWATER S.A', correo: 'info@argeswater.com.ar' },
  {
    nombre: 'ARNORIAGA JUAN DANIEL',
    correo: 'administracion@arnoriaga.com.ar'
  },
  { nombre: 'ARPEX ARGENTINA', correo: 'gaveni@arpex.com.ar' },
  { nombre: 'ASI ASESORES INDUSTRIALES S.R.L', correo: 'alonsoasisrl@gmail.com' },
  { nombre: 'ASOCIACION ARG. CODIFICACION PROD. COMER GS1', correo: 'cobranzas@gs1.org.ar' },
  {
    nombre: 'ASTIE DIESEL S.A ',
    correo: 'ctasctesdistribuidor@astieypf.com.ar',
    correo2: 'ctasctesestacion@astieypf.com.ar'
  },
  {
    nombre: 'BALDINELLI GUERINO RAUL',
    correo: 'aalvarez@indias.com.ar'
  },
  { nombre: 'BAMORE S.R.L', correo: 'info@bamore.com.ar' },
  { nombre: 'BARBERIS', correo: 'barberiscristian@gmail.com' },
  {
    nombre: 'BARBAT Y CIA S.A',
    correo: 'contabilidad@barbat.com',
    correo2: 'fbelfiore@barbat.com'
  },
  { nombre: 'BARROS Y DI MATTEO SRL', correo: 'metalurgica_barrosydimatteo@yahoo.com.ar' },
  { nombre: 'BIOTEC S.A', correo: 'hdcalde@gmail.com' },
  { nombre: 'BLANCO DANIEL ORLANDO', correo: 'blancodaniel071@gmail.com' },
  {
    nombre: 'BONDI JUAN ANTONIO',
    correo: 'tallerintegraldelfreno@yahoo.com.ar'
  },
  {
    nombre: 'BONDI MARCELO LEONARDO',
    correo: 'Mbserviciosyrepuestos@gmail.com'
  },
  { nombre: 'BONETO ALEXIS', correo: 'construmasajb@gmail.com' },
  { nombre: 'BROCHETTO GASTON AMADEO', correo: 'gastonbrocchetto@gmail.com' },
  { nombre: 'BRENNTAG ARGENTINA S.A', correo: 'Juan.Cruz@brenntag.com' },
  { nombre: 'BUENA VIBRA S.A', correo: 'cuentas@postalurbana.com.ar' },
  {
    nombre: 'BULONERA DEL OESTE S.A',
    correo: 'administracion@bdeloeste.com.ar'
  },
  { nombre: 'BYB', correo: 'cobranzasmendoza@basanibgp.com.ar' },
  { nombre: 'C+D SAS', correo: 'administracion@centrifugacion.com.ar' },
  {
    nombre: 'CALZADOS SALAMONE S.R.L',
    correo: 'cobranzas@asdistribuidora.com'
  },
  {
    nombre: 'CAMARA DE COMERCIO EXTERIOR DE CUYO',
    correo: 'carlafernandez@ccecuyo.com.ar'
  },
  {
    nombre: 'CAMARGO E HIJOS CONTRUCCIONES S.A.S',
    correo: 'camargo.construcciones@hotmail.com'
  },
  { nombre: 'CARRASCO SAMUEL VICENTE', correo: 'tecni-ca@hotmail.com' },
  { nombre: 'CARTOCOR', correo: 'jmones@arcor.com' },
  { nombre: 'CECCARELLI PAOLA', correo: 'ccconsultoracalidad@gmail.com' },
  { nombre: 'CENA MARCELO JAVIER', correo: 'marcelojaviercena@gmail.com' },
  {
    nombre: 'CERRO INDUMENTARIA',
    correo: 'mza@cerroindumentaria.com.ar',
    correo2: 'ventaspymes@cerroindumentaria.com.ar'
  },
  { nombre: 'CHEMICAL CENTER', correo: 'atriguy@chemicalcenter.com.ar' },
  { nombre: 'CLARA DEL VALLE', correo: 'graficakogan@hotmail.com' },
  { nombre: 'COLO ALBERTO', correo: 'ferreteriamendoza06@gmail.com' },
  {
    nombre: 'COMPAÑÍA INTRODUCTORA DE BS AS S.A',
    correo: 'balmacedar@dosanclas.com.ar'
  },
  { nombre: 'CONIGLIONE', correo: 'odconiglione@hotmail.com' },
  {
    nombre: 'COOPERATIVA DE SERVICIO JA',
    correo: 'cooperativa.alvarez@hotmail.com'
  },
  { nombre: 'CORPORACION LODRA', correo: 'cuentascorrientes@lodra.com.ar' },
  { nombre: 'CRISOPA SRL', correo: 'administracion@crisopa.com.ar' },
  { nombre: 'DICARS', correo: 'vangoindumentaria@gmail.com' },
  { nombre: 'DIMENSION S.A', correo: 'patricianarvaezdealterio@gmail.com' },
  {
    nombre: 'DISTRIBUIDORA DE GAS CUYANA',
    correo: 'transferencias@ecogas.com.ar'
  },
  {
    nombre: 'DUTCH STARCHES INTERNACIONAL S.A.',
    correo: 'cobranzas@dsi-arg.com.ar'
  },
  { nombre: 'EDEMSA', correo: 'CContreras@edemsa.com', correo2: 'recaudaciones@edemsa.com' },

  { nombre: 'ELARTE SERVICIOS S.A', correo: 'caguayo@elarteseguridad.com.ar' },
  { nombre: 'ELECTRO DORREGO S.A.', correo: 'admin@electro-dorrego.com.ar' },
  { nombre: 'ELECTRONICA MENDOZA S.A', correo: 'ventas@electronicamendoza.com.ar' },
  { nombre: 'ELECTROMECANICA SASSO S.A', correo: 'gladys.becerra@elesasso.com' },
  { nombre: 'ELECTRICIDAD MAZA S.R.L', correo: 'centro@electricidadmaza.com.ar' },
  { nombre: 'EMMRO', correo: 'lonascanilla@gmail.com' },
  { nombre: 'EP MARTINELLI S.A.S', correo: 'epmartinelli@gmail.com' },
  { nombre: 'EQUIPOS COMPACTOS S.A', correo: 'aletomba@hotmail.com' },
  { nombre: 'ESTECMA S.A', correo: 'luciano.bagnato@estecma.com.ar' },
  {
    nombre: 'ESTUDIO RULE RETALI SRL',
    correo: 'administracion@ruleretali.com'
  },
  { nombre: 'EXPO PACK S.A', correo: 'ventas@taksa.com.ar' },
  { nombre: 'EXPRESO LUJAN', correo: 'paolaq@expresolujan.com' },
  { nombre: 'FALFER', correo: 'adminobras@falfersa.com.ar' },
  { nombre: 'FAMIQ', correo: 'vtejada@famiq.com.ar' },
  { nombre: 'FEDEMI SRL', correo: 'cobranzas@fedemi.com.ar' },
  { nombre: 'FERNANDEZ JOSE RICARDO', correo: 'ventas@rfmayorista.com.ar' },
  { nombre: 'FLEX PIPE S.A', correo: 'cobranzas.wae@gmail.com' },
  { nombre: 'GARRO LUIS ARNALDO', correo: 'electrovilla@hotmail.com.ar' },
  { nombre: 'GAS MERIDIONAL', correo: 'csm@gasmeridional.com.ar' },
  { nombre: 'GILIGROUP SAS', correo: 'cobranza@saavedrasi.com.ar' },
  {
    nombre: 'GODOY ALEJANDRA FRANCISCA Y MARCO ADOLFO',
    correo: 'mgmecanizados@yahoo.com.ar'
  },
  { nombre: 'GODOY RICARDO ABELARDO', correo: 'richar_godoy@hotmail.com' },
  {
    nombre: 'GONZALEZ MICAELA BETSABE',
    correo: 'betsabeindumentaria00@gmail.com'
  },
  { nombre: 'GONZALEZ VICENTE SALVADOR', correo: 'indupint@indupint.com.ar' },
  { nombre: 'GREIF ARGENTINA S.A.', correo: 'LuisAlberto.Irustia@greif.com' },
  { nombre: 'GRUAS TRUCK S.A', correo: 'administracion@gruastruck.com' },
  { nombre: 'GRUPO IDF SAS', correo: 'administracion@grupoidf.com.ar' },
  { nombre: 'GUSTAVO DISTANTE', correo: '' },
  { nombre: 'HABASIT', correo: 'facturacion@habasit.com.ar' },
  { nombre: 'HENRY HIRSCHEN Y CIA S.A', correo: 'sabrinai@hirschen.com.ar' },
  {
    nombre: 'HERRAMIENTAS S.R.L',
    correo: 'herramientas_industria@hotmail.com',
    correo2: 'herramientasservis@outlook.com.ar'
  },
  { nombre: 'INDUSTRIAS PALLETS', correo: 'industriaspallets@hotmail.com' },
  {
    nombre: 'INAP S.R.L',
    correo: 'ventas@inapar.com.ar',
    correo2: 'vgaray@inapar.com.ar'
  },
  { nombre: 'INDUSTRIA TEXTIL UNI MAX', correo: 'manuelfortugno60@gmail.com' },
  { nombre: 'INDUSTRIAS DARC', correo: 'cobranzas@clark.com.ar' },
  { nombre: 'INDUSTRIAS QUIMICAS ALMIDAR', correo: '' },
  { nombre: 'INGENIERIA OZOLLO', correo: 'agro21@agro21sa.com' },
  { nombre: 'INSUMOS MULTIMARCA', correo: 'insumosmultimarca@gmail.com' },
  { nombre: 'INTERCONTAINERS', correo: 'jimena@intercontainers-st.com.ar' },
  { nombre: 'INTI', correo: 'adminmza@inti.gob.ar' },
  {
    nombre: 'INZIRILLO RUBEN MIGUEL Y ORLANDO ROQUE',
    correo: 'metalmecanicaroi@gmail.com'
  },
  { nombre: 'IRUSTA PEDRO GUSTAVO', correo: '' },
  { nombre: 'ITECRA S.A', correo: 'avillalobos@itecra.com' },
  { nombre: 'J C TUDELA', correo: 'maritepro@yahoo.com.ar' },
  {
    nombre: 'JORGE D. IGLESIAS Y MARIA T. IGLESIAS S.H.',
    correo: 'jmiglesias1956@gmail.com'
  },
  { nombre: 'JOSE BENTICUAGA E HIJO', correo: 'emilia@benticuaga.com.ar' },
  { nombre: 'JUJINOVICH ESTEBAN OMAR', correo: 'jujinovich0103@yahoo.com.ar' },
  { nombre: 'KATSUDA S.A.', correo: 'mendoza@katsuda.com.ar' },
  { nombre: 'KOENA S.A', correo: 'fernandocubells23@gmail.com' },
  {
    nombre: 'LA CAMIONERA MENDOCINA S.R.L',
    correo: 'cristianmoreno@camionera.com.ar'
  },
  {
    nombre: 'LA PRIMERA SEGURIDAD INTEGRAL',
    correo: 'caguayo@seguridadlaprimera.com'
  },
  {
    nombre: 'LABORATORIOS QUIMICOS',
    correo: 'facturacion.lq@lquimicos.com.ar'
  },
  { nombre: 'LAMA HERMINIO ALBERTO', correo: 'resorteslama@hotmail.com' },
  { nombre: 'LAROCCA NEUMATICOS S.A', correo: 'comprobantes@larocca.com.ar' },
  { nombre: 'LIVLASA', correo: 'info@livlasa.com' },
  { nombre: 'CORPORACION LODRA', correo: 'karina@lodra.com.ar' },
  { nombre: 'MACHININGMG S.A.S', correo: 'mgmecanizados@yahoo.com.ar' },
  { nombre: 'MAG S.R.L', correo: 'administracion@magsrl.com.ar' },
  { nombre: 'MANTELLO NEUMATICO S.A', correo: 'mantello@infovia.com.ar' },
  { nombre: 'MAQ OIL SAIC', correo: 'maqoil@maqoil.com' },
  {
    nombre: 'MARCO VALLANA ACCES INDUSTRIALES SRL',
    correo: 'administracion@marcovallana.com.ar'
  },
  {
    nombre: 'MARNETTO CARLOS MARIA JOSE',
    correo: 'jmarnetto@estudiomarnetto.com.ar'
  },
  { nombre: 'MARONI C', correo: 'cecilia.moncayo@maroni-c.com.ar' },
  { nombre: 'MAS ELECTRO URQUIZA S.A', correo: 'maselectrourquiza@gmail.com' },
  { nombre: 'MARTIN GUSTAVO ERNESTO', correo: 'crisaprotege@gmail.com' },
  {
    nombre: 'MARTINEZ JORGE JAVIER',
    correo: 'Fastautoelevadores@yahoo.com.ar'
  },
  {
    nombre: 'MASSARUTTI MAURICIO ADRIAN',
    correo: 'mauriciomassarutti@gmail.com'
  },
  {
    nombre: 'MATERIALES URQUIZA',
    correo: 'maturquiza@gmail.com',
    correo2: '1900carignano@gmail.com'
  },
  { nombre: 'MEGAENVASES S.A', correo: 'admin2@mega-envases.com.ar' },
  { nombre: 'METALVID S.A', correo: 'bejartap@gmail.com' },
  {
    nombre: 'MILIOTTO MARCOS JAVIER',
    correo: 'electromecanicamarcosmiliotto@gmail.com'
  },
  { nombre: 'MOLINA SABRINA', correo: 'sam.integralservices@hotmail.com' },
  { nombre: 'MONTAGUA', correo: 'ventas@montagua.com.ar' },
  { nombre: 'MORAGAS JAVIER HUMBERTO', correo: 'gringaiba22@gmail.com' },
  { nombre: 'MULTIMODAL SACIA (PTM)', correo: 'ctasctesptm@fiscalptm.com.ar' },
  { nombre: 'NIEVAS GUSTAVO ORLANDO', correo: 'gustavo@pamperomaipu.com.ar' },
  { nombre: 'OESTE TRANSMISIONES S.A', correo: 'ventas@oestetransmisiones.com.ar' },
  { nombre: 'OLIVA JUAN JOSE', correo: 'transporte_oliva@hotmail.com' },
  { nombre: 'OSDE', correo: 'cobranzas-cuyo@osde.com.ar' },
  { nombre: 'OXIGAS SRL', correo: 'oxigassrl@yahoo.com.ar' },
  { nombre: 'PASTOR BARONI S.R.L', correo: 'claudia70_aguirre@hotmail.com' },
  { nombre: 'PETROQUIMICA RIO TERCERO', correo: 'grodriguez@pr3.com.ar' },
  { nombre: 'PINTURERIA COLOR', correo: 'pintureriacolorsa@gmail.com' },
  { nombre: 'PLANEXWARE S.A', correo: 'cobranzas@planexware.com', correo2: 'renovaciones@planexware.com' },
  { nombre: 'POLIFIBRA SRL', correo: 'polifibra@hotmail.com' },
  { nombre: 'POSCA EMPAQUES S.R.L', correo: 'ventas@posca-empaques.com.ar' },
  { nombre: 'PRAXAIR', correo: 'arcobranzas@linde.com' },
  { nombre: 'PROPACK S.A', correo: 'facturacion@propacksa.com.ar' },
  {
    nombre: 'PROVEEDORES INDUSTRIALES NOR-FER S.R.L',
    correo: 'ecostarelli@nor-fer.com.ar'
  },
  { nombre: 'QUIMICUY', correo: 'juan@quimicuy.com.ar' },
  { nombre: 'RAGA S.R.L', correo: 'sandra.gomez@raga.com.ar' },
  { nombre: 'RC TRANSPORTES Y LOGISTICA S.A', correo: 'roberto@rctransportes.com.ar' },
  { nombre: 'REGIS S.A', correo: 'ventas@regissa.com' },
  { nombre: 'RENAUD', correo: 'tomasreynaud@outlook.com' },
  { nombre: 'REVITE S.A', correo: 'revitesamendoza@gmail.com' },
  { nombre: 'RICHELET', correo: 'info@richelet.com.ar' },
  {
    nombre: 'RODAMIENTOS AVENIDA S.A',
    correo: 'cobranzas@rodamientosavenida.com.ar'
  },
  { nombre: 'GAGLIANO GUSTAVO', correo: 'cobranzas@rodamientosbrasil.com' },
  { nombre: 'RODAMIENTOS CUYO', correo: 'gescames@rodamientoscuyo.coM' },
  { nombre: 'RODIN SRL', correo: 'dcappella@rodinsrl.com.ar' },
  {
    nombre: 'RODRIGUEZ HERMANOS TRANSPORTES',
    correo: 'cobranzasmza@rht.com.ar'
  },
  { nombre: 'ROLLS S.R.L', correo: 'fernandomoya@rolls.com.ar' },
  { nombre: 'ROSSO JORGE LUIS', correo: 'agencia@dhlmendoza.com.ar' },
  { nombre: 'SABOREDO LUIS ALBERTO', correo: 'administracion@bullsoluciones.com', correo2: 'ventas@bullsoluciones.com' },
  { nombre: 'SAIGRO S.A', correo: 'administracion.mendoza@saigro.com.ar' },
  { nombre: 'SCANIA ARGENTINA', correo: 'antonella.ochoa@scania.com' },
  { nombre: 'SEND SA', correo: 'administracion@cadenorte.com' },
  { nombre: 'SERVEC SRL', correo: 'servecsrl@infovia.com.ar' },
  { nombre: 'SHOPAL S.R.L', correo: 'administracion@shopal.com.ar' },
  { nombre: 'SIERRA DIEGO', correo: 'diego.sierra.utn@gmail.com' },
  {
    nombre: 'SIMON SOLIVELLAS E HIJOS S.A',
    correo: 'solivellascobranzas@hotmail.com'
  },
  {
    nombre: 'SMURTFIT KAPPA DE ARGENTINA',
    correo: 'marcela.signorello@smurfitkappa.com.ar'
  },
  { nombre: 'SODA DIMARCO S.R.L', correo: 'victoria@sodadimarco.com.ar' },
  { nombre: 'SOLUCIONES MRO SAIC', correo: 'pmoron@solucionesmro.com.ar' },
  { nombre: 'SOSA ROBERTO JAVIER', correo: 'n23uniformes@gmail.com' },
  {
    nombre: 'STOCK DE MATERIALES S.A.S',
    correo: 'ventas@stockdemateriales.com.ar'
  },
  { nombre: 'STONCOR SOUTH CONE', correo: 'n_berton@stoncor.com.ar' },
  { nombre: 'SIS TRANS S.A', correo: 'administracion@surtecnica.com' },
  { nombre: 'SUL MINEIRA S.A', correo: 'contaduria@sulmineira.com.ar' },
  { nombre: 'SUR INSUMOS', correo: 'administracion@disurmza.com' },
  { nombre: 'SURFACTAN', correo: 'dbertolini@surfactan.com.ar' },
  { nombre: 'TAKSA S.A', correo: 'ventas@taksa.com.ar' },
  { nombre: 'TB LOGISTICA S.R.L', correo: 'info.mendoza@tblogistica.com' },
  {
    nombre: 'TELEFONICA MOVILES DE ARGENTINA',
    correo: 'miguel.quagliarella@telefonica.com'
  },
  { nombre: 'TERMET S.A', correo: 'raulanfuso01@gmail.com' },
  { nombre: 'TERSAC INDUSTRIAL S.R.L', correo: 'administracion@tersac.com.ar' },
  { nombre: 'TIA INOX S.A', correo: 'megapack@megapack-argentina.com.ar' },
  { nombre: 'TOSO JUAN GUILLERMO', correo: 'monica.protec@tosojuan.com.ar' },
  { nombre: 'TOVER', correo: 'ventas@tover.com.ar' },
  { nombre: 'TRANSPORTE FIOCHETTE', correo: 'lucasfiocch@gmail.com' },
  { nombre: 'TRANSPORTE TGH', correo: 'transportetgh@gmail.com' },
  { nombre: 'TRES GORDITOS', correo: 'tresgorditos@tresgorditos.com.ar' },
  { nombre: 'ULTIMA MILLA', correo: 'administracion@ultimamilla.com.ar' },
  { nombre: 'VALKIRIA S.A', correo: 'lorenamorales.cpn@gmail.com' },
  { nombre: 'VENDNET VUYO S.A', correo: 'vendnetcuyo@vendnetcuyo.com.ar' },
  { nombre: 'VIDEOJET', correo: 'gonzalo.peralta@videojet.com' },
  { nombre: 'WESTNET', correo: 'clasheras@westnet.com.ar' },
  { nombre: 'WESTRONIC', correo: 'westronicdatos@gmail.com' },
  { nombre: 'WINNER', correo: 'pabloventas@winnersrl.com.ar' },
  { nombre: 'WITJETCOD', correo: 'serviciosindustrialescordoba@gmail.com' },
  { nombre: 'XFLY', correo: 'ventas@xfly.com.ar' },
  { nombre: 'ZAPATA GOMA S.A', correo: 'contablezapatagoma@gmail.com' }
]

export default proveedores
