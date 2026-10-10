/* Langue : français (par défaut) ou portugais du Brésil.
   Choix : ?lang=pt|fr > choix mémorisé > langue de l'appareil (pt* → portugais, sinon français). */
(function(){
  'use strict';
  var D = {
    fr: {
      home:"← Accueil", dateShort:"15 mai 2027", dateLong:"Samedi 15 mai 2027",
      venueSub:"Domaine Monmanoir · 15 mai 2027",
      eyebrowCountdown:"Le grand jour arrive dans", eyebrowFew:"Plus que quelques jours", eyebrowNow:"En ce moment",
      eyebrowThanks:"Mariana & Robin vous remercient",
      days:"jours", hours:"heures", mins:"min", secs:"sec",
      subMsg:"Retrouvez ici le plan, les horaires et l'itinéraire du jour J.",
      subFew:"Le jour J approche : le plan, les horaires et l'itinéraire vous attendent.",
      subNow:"Touchez « Entrer » pour le plan et l'itinéraire de cette étape.",
      subThanks:"Avec tout notre amour.",
      enter:"Entrer", route:"Itinéraire", photos:"Photos",
      photosNote:"Pour voir et partager les photos, c'est ici.",
      thanks:"Merci !", thanksDesc:"Merci d'avoir partagé ce jour si spécial avec nous.",
      openWith:"Ouvrir l'itinéraire avec", cancel:"Annuler",
      metaDesc:"Mariana & Robin se marient le 15 mai 2027 au Domaine Monmanoir.",
      docTitle:"Mariana & Robin — 15 mai 2027",
      "d.arrivee":"Garez-vous sur le parking en suivant le chemin depuis le portail.",
      "d.ceremonie":"Suivez le chemin depuis le parking, la cérémonie va commencer.",
      "d.cocktail":"Suivez le chemin vers la terrasse pour l'apéritif.",
      "d.diner":"Installez-vous, le dîner va être servi.",
      "d.soiree":"Place à la piste de danse pour la suite de la fête.",
      "d.retour":"Rendez-vous dimanche 16 mai à 11h pour le retour de mariage.",
      "n.arrivee":"Accueil", "n.ceremonie":"Cérémonie", "n.cocktail":"Vin d'honneur",
      "n.diner":"Dîner", "n.soiree":"Soirée", "n.retour":"Retour de mariage",
      "t.arrivee":"Bienvenue !", "t.ceremonie":"Cérémonie", "t.cocktail":"Vin d'honneur",
      "t.diner":"Bon appétit !", "t.soiree":"Bonne soirée !", "t.retour":"Retour de mariage",
      "p.arrivee":["Accueil","Arrivée au domaine"], "p.ceremonie":["Cérémonie","Dans les jardins"],
      "p.cocktail":["Vin d'honneur","Cocktail & photos"], "p.diner":["Dîner","Repas dans la grande salle"],
      "p.soiree":["Soirée & danse","La nuit vous appartient !"], "p.retour":["Retour de mariage","Dimanche 16 mai"],
      sun:"Dim. ", welcomeBar:"Bienvenue", programTitle:"Programme de la journée",
      back:"‹ Retour", next:"Suivant ›", then:"Ensuite", live:"En ce moment", at:"À ",
      theVenue:"Le lieu", street:"6 Rue de Paris<br>95680 Montlignon",
      copyAddr:"Copier l'adresse", copied:"Adresse copiée ✓", copyFail:"Copie impossible",
      zoomIn:"Zoomer", zoomOut:"Dézoomer", closeMap:"Fermer le plan", expandMap:"Agrandir le plan",
      mapAlt:"Plan du domaine", dinerAlt:"Illustration du dîner", soireeAlt:"Illustration de la soirée",
      pinParking:"Parking", pinCeremonie:"Cérémonie", pinCocktail:"Vin d'honneur",
      help:"En cas de besoin", witness:"Témoin", mc:"Maître de cérémonie", call:"Appeler",
      tip:"Astuce : ajoutez cette page à votre écran d'accueil pour la retrouver en un geste, même sans réseau.",
      switchTo:"Português (BR)"
    },
    pt: {
      home:"← Início", dateShort:"15 de maio de 2027", dateLong:"Sábado, 15 de maio de 2027",
      venueSub:"Domaine Monmanoir · 15 de maio de 2027",
      eyebrowCountdown:"O grande dia chega em", eyebrowFew:"Faltam só alguns dias", eyebrowNow:"Neste momento",
      eyebrowThanks:"Mariana & Robin agradecem",
      days:"dias", hours:"horas", mins:"min", secs:"seg",
      subMsg:"Encontre aqui o mapa, os horários e o itinerário do grande dia.",
      subFew:"O grande dia está chegando: o mapa, os horários e o itinerário esperam por você.",
      subNow:"Toque em “Entrar” para ver o mapa e o itinerário desta etapa.",
      subThanks:"Com todo o nosso carinho.",
      enter:"Entrar", route:"Itinerário", photos:"Fotos",
      photosNote:"Para ver e compartilhar as fotos, é aqui.",
      thanks:"Obrigado!", thanksDesc:"Obrigado por compartilhar este dia tão especial conosco.",
      openWith:"Abrir o itinerário com", cancel:"Cancelar",
      metaDesc:"Mariana & Robin se casam em 15 de maio de 2027 no Domaine Monmanoir.",
      docTitle:"Mariana & Robin — 15 de maio de 2027",
      "d.arrivee":"Estacione no estacionamento seguindo o caminho a partir do portão.",
      "d.ceremonie":"Siga o caminho a partir do estacionamento, a cerimônia vai começar.",
      "d.cocktail":"Siga o caminho até o terraço para o coquetel.",
      "d.diner":"Acomodem-se, o jantar vai ser servido.",
      "d.soiree":"Hora de ir para a pista de dança e curtir o resto da festa.",
      "d.retour":"Encontro no domingo, 16 de maio, às 11h, para o dia seguinte ao casamento (retour de mariage).",
      "n.arrivee":"Recepção", "n.ceremonie":"Cerimônia", "n.cocktail":"Coquetel",
      "n.diner":"Jantar", "n.soiree":"Festa", "n.retour":"Dia seguinte",
      "t.arrivee":"Bem-vindos!", "t.ceremonie":"Cerimônia", "t.cocktail":"Coquetel",
      "t.diner":"Bom apetite!", "t.soiree":"Boa festa!", "t.retour":"Dia seguinte ao casamento",
      "p.arrivee":["Recepção","Chegada ao domínio"], "p.ceremonie":["Cerimônia","Nos jardins"],
      "p.cocktail":["Coquetel","Coquetel & fotos"], "p.diner":["Jantar","Refeição no grande salão"],
      "p.soiree":["Festa & dança","A noite é de vocês!"], "p.retour":["Dia seguinte ao casamento","Domingo, 16 de maio"],
      sun:"Dom. ", welcomeBar:"Bem-vindos", programTitle:"Programação do dia",
      back:"‹ Voltar", next:"Próximo ›", then:"A seguir", live:"Neste momento", at:"Às ",
      theVenue:"O local", street:"6 Rue de Paris<br>95680 Montlignon, França",
      copyAddr:"Copiar o endereço", copied:"Endereço copiado ✓", copyFail:"Não foi possível copiar",
      zoomIn:"Aproximar", zoomOut:"Afastar", closeMap:"Fechar o mapa", expandMap:"Ampliar o mapa",
      mapAlt:"Mapa do domínio", dinerAlt:"Ilustração do jantar", soireeAlt:"Ilustração da festa",
      pinParking:"Estacionamento", pinCeremonie:"Cerimônia", pinCocktail:"Coquetel",
      help:"Em caso de necessidade", witness:"Padrinho/Madrinha", mc:"Mestre de cerimônias", call:"Ligar",
      tip:"Dica: adicione esta página à tela inicial do celular para abri-la rapidamente, mesmo sem internet.",
      switchTo:"Français"
    }
  };

  var q = (new URLSearchParams(location.search).get('lang') || '').toLowerCase().slice(0,2);
  var saved = ''; try{ saved = localStorage.getItem('lang') || ''; }catch(_){}
  var langs = (navigator.languages && navigator.languages.length) ? navigator.languages : [navigator.language || 'fr'];
  var auto = 'fr';
  for(var i=0;i<langs.length;i++){
    var l = String(langs[i]).toLowerCase();
    if(l.indexOf('pt') === 0){ auto = 'pt'; break; }
    if(l.indexOf('fr') === 0){ auto = 'fr'; break; }
  }
  var lang = D[q] ? q : (D[saved] ? saved : auto);
  if(D[q]){ try{ localStorage.setItem('lang', q); }catch(_){} }

  var T = {
    lang: lang,
    locale: lang === 'pt' ? 'pt-BR' : 'fr-FR',
    t: function(k){ var v = D[lang][k]; return v === undefined ? D.fr[k] : v; },
    // Applique les textes statiques : data-i18n (texte), data-i18n-html, data-i18n-attr="attr:clé"
    apply: function(root){
      root = root || document;
      root.querySelectorAll('[data-i18n]').forEach(function(e){ e.textContent = T.t(e.getAttribute('data-i18n')); });
      root.querySelectorAll('[data-i18n-html]').forEach(function(e){ e.innerHTML = T.t(e.getAttribute('data-i18n-html')); });
      root.querySelectorAll('[data-i18n-attr]').forEach(function(e){
        e.getAttribute('data-i18n-attr').split(';').forEach(function(p){
          var a = p.split(':'); e.setAttribute(a[0], T.t(a[1]));
        });
      });
    },
    // Bascule FR <-> PT (mémorisée) puis recharge
    toggle: function(){
      try{ localStorage.setItem('lang', lang === 'pt' ? 'fr' : 'pt'); }catch(_){}
      var u = new URL(location.href); u.searchParams.delete('lang'); location.href = u.toString();
    }
  };
  document.documentElement.lang = lang === 'pt' ? 'pt-BR' : 'fr';
  document.title = T.t('docTitle');
  window.I18N = T;
  window.t = T.t;
  document.addEventListener('DOMContentLoaded', function(){
    T.apply();
    var d = document.querySelector('meta[name="description"]'); if(d) d.setAttribute('content', T.t('metaDesc'));
    document.querySelectorAll('.lang-switch').forEach(function(b){ b.textContent = T.t('switchTo'); b.addEventListener('click', T.toggle); });
  });
})();
