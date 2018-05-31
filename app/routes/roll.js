import Route from '@ember/routing/route';

export default Route.extend({
  actions: {
    saveRoll: function(rollName, numberOfDice, numberOfSides) {
      // alert(`Rolling ${numberOfDice}D${numberOfSides} as "${rollName}"`);

      let self = this;
      let result = 0;

      for (let i = 0; i < numberOfDice; ++i) {
        result += 1 + (parseInt(Math.random() * numberOfSides));
      }

      const store = this.get('store');
      const roll = store.createRecord('roll', {
        rollName,
        numberOfDice,
        numberOfSides,
        result
      });

      roll.save().then(
        () => self.transitionTo('application')
      );
    }
  }
});
