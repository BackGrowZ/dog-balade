const initialState = {
  search: "",
  filterTag: [],
  filterTrajet: 110,
  data: [
    {
      name: "crapa",
      map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2710.1913443955873!2d-1.5206086232455358!3d47.21283821508528!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4805eed7056450a9%3A0x6d4251f6fa5e543!2sParc%20CRAPA!",
      description: "Parc avec des humains et des chiens",
      tag: ["parc", "foret", "eau", "pique-nique"],
      trajet: 65,
    },
    {
      name: "parc de gournerie",
      map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2708.313632560604!2d-1.6389547232439778!3d47.24957011256348!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4805ed41ce2e16d5%3A0x553fce37d131fc92!2sParc%20de%20la%20Gournerie!",
      description: "Parc avec des humains et des chiens",
      tag: ["parc", "foret", "eau", "pique-nique"],
      trajet: 6,
    },
    {
      name: "Bois du buis",
      map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2715.6375945831196!2d-1.2998592232500952!3d47.10617482239975!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48067566f63058c7%3A0x4cf9eabd753988ae!2sBois%20de%20buis!",
      description: "Parc avec des humains et des chiens",
      tag: ["parc", "foret", "eau", "pique-nique"],
      trajet: 6,
    },
    {
      name: "lac de grand-lieu",
      map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d52946.973066585015!2d-1.6270918422612841!3d47.17094386477797!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4805bfe14880850d%3A0x612b0207cc0360d6!2sLac%20de%20Grand-Lieu%20-%20Pierres%20Aigu%C3%ABs!",
      description: "Parc avec des humains et des chiens",
      tag: ["parc", "foret", "eau", "pique-nique"],
      trajet: 6,
    },
    {
      name: "foret du gavre",
      map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d22110.41027016391!2d-1.8158981553823115!3d47.53026980780615!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x480f65d6b16b1951%3A0xfb5580d62678c8de!2zRm9yw6p0IGR1IEfDonZyZQ!5e1!3m2!1sfr!2sfr!4v1681714435484!5m2!1sfr!2sfr",
      description: "Parc avec des humains et des chiens",
      tag: ["parc", "foret", "eau", "pique-nique"],
      trajet: 6,
    },
    {
      name: "parc de la roche",
      map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3306.2336209797336!2d-1.5202271232453128!3d47.21830671470989!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4805ef274e294a1d%3A0xbf90cf85be18d758!2sParc%20de%20la%20Roche!5e1!3m2!1sfr!2sfr!4v1681714490079!5m2!1sfr!2sfr",
      description: "Parc avec des humains et des chiens",
      tag: ["parc", "foret", "eau", "pique-nique"],
      trajet: 6,
    },
    {
      name: "parc chézine",
      map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3305.0950134477266!2d-1.610347823244527!3d47.236564013456615!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4805ecf9b5b818e5%3A0x6fba137cc84406f3!2sParc%20de%20la%20Ch%C3%A9zine!5e1!3m2!1sfr!2sfr!4v1681714552878!5m2!1sfr!2sfr",
      description: "Parc avec des humains et des chiens",
      tag: ["parc", "foret", "eau", "pique-nique"],
      trajet: 6,
    },
    {
      name: "parc de la filée",
      map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13247.916016795527!2d-1.5501347241110914!3d47.126098587976585!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4805e9e201080b03%3A0xd60d468c8c09498e!2sParc%20de%20la%20Fil%C3%A9e%2C%2044840%20Les%20Sorini%C3%A8res!5e1!3m2!1sfr!2sfr!4v1681714634656!5m2!1sfr!2sfr",
      description: "Parc avec des humains et des chiens",
      tag: ["parc", "foret", "eau", "pique-nique"],
      trajet: 23,
    },
    {
      name: "Parc du Grand Blottereau",
      map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3305.543167438038!2d-1.5114860232448226!3d47.229378613949876!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4805ec15416d23c9%3A0xc9c6aeed0f58abed!2sParc%20du%20Grand%20Blottereau!5e1!3m2!1sfr!2sfr!4v1681714743681!5m2!1sfr!2sfr",
      description: "Parc avec des humains et des chiens",
      tag: ["parc", "foret", "eau", "pique-nique"],
      trajet: 6,
    },
  ],
};

const reducer = (state, action) => {
  switch (action.type) {
    case "SEARCH":
      return {
        ...state,
        search: action.payload,
      };

    case "FILTER":
      return {
        ...state,
        filterTag: action.payload,
      };

    case "TRAJET":
      return {
        ...state,
        filterTrajet: action.payload,
      };
    case "RESET":
      return {
        ...state,
        filterTrajet: 110,
        filterTag: [],
        search: "",
      };
    default:
      state;
  }
};

export { reducer, initialState };
