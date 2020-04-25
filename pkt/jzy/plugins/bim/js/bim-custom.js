/////////////////////////////////////////////////////////////////
    // Initialization Options
    //
    /////////////////////////////////////////////////////////////////
    var initOptions = {
      path: Autodesk.Viewing.Private.getParameterByName('path') || './v8/0.svf',
      env: 'Local'
    }

    /////////////////////////////////////////////////////////////////
    // Environment Initialized Handler
    //
    /////////////////////////////////////////////////////////////////
    function onEnvInitialized () {

      var domContainer = document.getElementById('viewer')

      // UI-less Version: viewer without controls and commands
      //viewer = new Autodesk.Viewing.Viewer3D(domContainer)

      // GUI Version: viewer with controls
      var viewer = new Autodesk.Viewing.Private.GuiViewer3D(domContainer)

      viewer.initialize()

      viewer.loadModel(initOptions.path)
    }

    /////////////////////////////////////////////////////////////////
    // Error Handler
    //
    /////////////////////////////////////////////////////////////////
    function onLoadError (errCode) {

      console.log('Error loading document: ' + errCode)
    }

    /////////////////////////////////////////////////////////////////
    // Bootstraping
    //
    /////////////////////////////////////////////////////////////////
    Autodesk.Viewing.Initializer(
      initOptions,
      function() {
        onEnvInitialized ()
      })
