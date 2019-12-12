var smartgrid = require("smart-grid");

var settings = {
  filename: "grid",
  outputStyle: "sass",
  columns: 12,
  mobileFirst: false,
  container: {
    maxWidth: "1280px",
    fields: '30px'
  },
  breakPoints: {
    lg: {
        width: '1280px'
    },
    md: {
        width: '1000px'
    },
    sm: {
        width: '768px',
        fields: '15px' 
    },
    xs: {
        width: '480px'
    }
  }
};

smartgrid("./dev/static/styles/utils", settings);
