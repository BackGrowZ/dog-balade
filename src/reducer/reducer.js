const initialState = {
  search: "",
  filterTag: [],
  filterTrajet: 110,
  data: [
    {
      name: "CRAP1",
      map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2710.1913443955873!2d-1.5206086232455358!3d47.21283821508528!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4805eed7056450a9%3A0x6d4251f6fa5e543!2sParc%20CRAPA!5e0!3m2!1sfr!2sfr!4v1681659156126!5m2!1sfr!2sfr",
      description: "Parc avec des humains et des chiens",
      tag: ["parc"],
      trajet: 65,
    },
    {
      name: "CRAP2",
      map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2710.1913443955873!2d-1.5206086232455358!3d47.21283821508528!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4805eed7056450a9%3A0x6d4251f6fa5e543!2sParc%20CRAPA!5e0!3m2!1sfr!2sfr!4v1681659156126!5m2!1sfr!2sfr",
      description: "Parc avec des humains et des chiens",
      tag: ["parc", "foret", "eau", "pique-nique"],
      trajet: 6,
    },
    {
      name: "CRAP",
      map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2710.1913443955873!2d-1.5206086232455358!3d47.21283821508528!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4805eed7056450a9%3A0x6d4251f6fa5e543!2sParc%20CRAPA!5e0!3m2!1sfr!2sfr!4v1681659156126!5m2!1sfr!2sfr",
      description: "Parc avec des humains et des chiens",
      tag: ["parc", "foret", "eau", "pique-nique"],
      trajet: 6,
    },
    {
      name: "CRAP",
      map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2710.1913443955873!2d-1.5206086232455358!3d47.21283821508528!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4805eed7056450a9%3A0x6d4251f6fa5e543!2sParc%20CRAPA!5e0!3m2!1sfr!2sfr!4v1681659156126!5m2!1sfr!2sfr",
      description: "Parc avec des humains et des chiens",
      tag: ["parc", "foret", "eau", "pique-nique"],
      trajet: 6,
    },
    {
      name: "CRAP",
      map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2710.1913443955873!2d-1.5206086232455358!3d47.21283821508528!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4805eed7056450a9%3A0x6d4251f6fa5e543!2sParc%20CRAPA!5e0!3m2!1sfr!2sfr!4v1681659156126!5m2!1sfr!2sfr",
      description: "Parc avec des humains et des chiens",
      tag: ["parc", "foret", "eau", "pique-nique"],
      trajet: 6,
    },
    {
      name: "CRAP",
      map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2710.1913443955873!2d-1.5206086232455358!3d47.21283821508528!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4805eed7056450a9%3A0x6d4251f6fa5e543!2sParc%20CRAPA!5e0!3m2!1sfr!2sfr!4v1681659156126!5m2!1sfr!2sfr",
      description: "Parc avec des humains et des chiens",
      tag: ["parc", "foret", "eau", "pique-nique"],
      trajet: 6,
    },
    {
      name: "CRAP",
      map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2710.1913443955873!2d-1.5206086232455358!3d47.21283821508528!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4805eed7056450a9%3A0x6d4251f6fa5e543!2sParc%20CRAPA!5e0!3m2!1sfr!2sfr!4v1681659156126!5m2!1sfr!2sfr",
      description: "Parc avec des humains et des chiens",
      tag: ["parc", "foret", "eau", "pique-nique"],
      trajet: 6,
    },
    {
      name: "CRAP",
      map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2710.1913443955873!2d-1.5206086232455358!3d47.21283821508528!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4805eed7056450a9%3A0x6d4251f6fa5e543!2sParc%20CRAPA!5e0!3m2!1sfr!2sfr!4v1681659156126!5m2!1sfr!2sfr",
      description: "Parc avec des humains et des chiens",
      tag: ["parc", "foret", "eau", "pique-nique"],
      trajet: 6,
    },
    {
      name: "CRAP",
      map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2710.1913443955873!2d-1.5206086232455358!3d47.21283821508528!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4805eed7056450a9%3A0x6d4251f6fa5e543!2sParc%20CRAPA!5e0!3m2!1sfr!2sfr!4v1681659156126!5m2!1sfr!2sfr",
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
