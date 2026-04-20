const flows = {
 creator: [
  {
   id:1,
   title:"How do you want to grow on TAKA?",
   type:"single",
   options:[
    "Collaborate with brands 🚀",
    "Build personal brand 📈"
   ]
  },

  {
   id:2,
   title:"Let's gather your social handles!",
   type:"multi",
   options:[
    "Instagram",
    "TikTok",
    "YouTube",
    "Facebook",
    "Twitter",
    "Other"
   ]
  },

  {
   id:3,
   title:"Provide links to other social media",
   type:"input"
  },

  {
   id:4,
   title:"Gigs & Campaigns",
   type:"double",
   questions:[
    {
     q:"Lowest fee received?",
     options:["<10K","10K-50K","50K-1L","1L+"]
    },
    {
     q:"Client experience?",
     options:[
      "Very Difficult",
      "Neutral",
      "Smooth"
     ]
    }
   ]
  },

  {
   id:5,
   title:"Client Engagement",
   type:"double",
   questions:[
    {
     q:"How do you engage clients?",
     options:["DM","Email","Agency","Other"]
    },
    {
     q:"Milestone payments?",
     options:["Yes","No","Maybe"]
    }
   ]
  },

  {
   id:6,
   title:"Create Account",
   type:"register"
  }
 ],

 brand: [
  {
   id:1,
   title:"How do you want to grow on TAKA?",
   type:"single",
   options:[
    "Hire influencers 🚀",
    "Run campaigns 📈"
   ]
  },

  {
   id:2,
   title:"Which creators do you need?",
   type:"multi",
   options:[
    "Fashion",
    "Tech",
    "Fitness",
    "Food",
    "Travel"
   ]
  },

  {
   id:3,
   title:"Monthly Budget",
   type:"single",
   options:[
    "<50K",
    "50K-1L",
    "1L-5L",
    "5L+"
   ]
  },

  {
   id:4,
   title:"Campaign Goal",
   type:"single",
   options:[
    "Awareness",
    "Sales",
    "UGC Content",
    "App Downloads"
   ]
  },

  {
   id:5,
   title:"Business Details",
   type:"form"
  },

  {
   id:6,
   title:"Create Account",
   type:"register"
  }
 ]
};

export default flows;