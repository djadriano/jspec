
ExampleModule = {
  name : 'ExampleModule',
  utilities : {
    doFoo : function(){ return 'foo' },
    doBar : function(){ return 'bar' }
  },
  randomHook : function(a, b) {
    return [a, b]
  },
  beforeSpec  : function() { addedBeforeSpec = true, addedBeforeSpecHook = false },
  afterSpec   : function() { addedAfterSpec = true, addedAfterSpecHook = false },
  beforeSuite : function() { addedBeforeSuite = true },
  afterSuite  : function() {
    addedAfterSuite = true
    addedBeforeSuite = addedBeforeSpec = addedAfterSpec = false
    //this.each('foo bar', function(){})
  },
  matchers : {
    be_foo_bar : function() {
      return true
    }
  },
  DSLs : {
    snake : {
      some_snake_case_stuff : function(){
        return true
      }
    },
    camel : {
      someCamelCaseStuff : function() {
        return true
      }
    }
  }
}

JSpec.include(ExampleModule)