sc.PlayerModel.inject({
  addComboStats: function() {
    for (let item of Object.values(this.equip)) {
      let currentItem = sc.inventory.items[item]
      if (currentItem && currentItem.combo && Object.values(this.equip).includes(itemAPI.customItemToId[currentItem.combo])) {
        if (currentItem.params && currentItem.comboParams) {
          this.equipParams.hp = this.equipParams.hp + Math.floor(currentItem.comboParams.hp || 0);
					this.equipParams.attack = this.equipParams.attack + Math.floor(currentItem.comboParams.attack || 0);
					this.equipParams.defense = this.equipParams.defense + Math.floor(currentItem.comboParams.defense || 0);
					this.equipParams.focus = this.equipParams.focus + Math.floor(currentItem.comboParams.focus || 0);
					if (this.equipParams.elemFactor)
						for (var h = 4; h--; ) { var i = Math.round(this.equipParams.elemFactor[h] * 100) + Math.round((currentItem.comboParams.elemFactor[h] || 1) * 100 - 100); this.equipParams.elemFactor[h] = Math.min(sc.MAX_MOD_VAL, i) / 100; }
        }

        if (currentItem.properties && currentItem.comboProperties) {
        for (let modifier in currentItem.comboProperties)
						if (sc.MODIFIERS[modifier])
							if (this.equipModifiers[modifier]) {
								let dif = this.equipModifiers[modifier];
								dif = Math.round(dif * 100) + Math.round(currentItem.comboProperties[modifier] * 100 - 100);
								this.equipModifiers[modifier] = Math.min(sc.MAX_MOD_VAL, dif) / 100;
							} else this.equipModifiers[modifier] = currentItem.comboProperties[modifier];
				}
      }
    }
  },
  updateStats(){
    this.parent();
    if (this.elementConfigs[sc.ELEMENT.NEUTRAL]) {
      this.addComboStats()
      for (var a in sc.ELEMENT)
        this.elementConfigs[sc.ELEMENT[a]].preSkillInit();
      for (var b = 0; b < this.skills.length; b++)
        this.skills[b] &&
          this.skills[b].applyOnConfigs(this.elementConfigs);
      this.baseConfig.update(this.equipParams, this.equipModifiers);
      for (a in sc.ELEMENT)
        this.elementConfigs[sc.ELEMENT[a]].update( this.equipParams, this.equipModifiers );
      this.params.setBaseParams( this.elementConfigs[this.currentElementMode].baseParams );
      this.params.setModifiers( this.elementConfigs[this.currentElementMode].modifiers );
      sc.Model.notifyObserver(this, sc.PLAYER_MSG.STATS_CHANGED);
    }
  },
})