/* sc.CombatParams.inject({
    getDamage(e, g, h, i, j) {
        var l = e.noHack || false;
        let critFactor = e.critFactor;
        // modify P to be slightly lower if player has extra CRIT chance from equipment
        var p = (e.attackerParams.getStat("focus", l) / this.getStat("focus", l))* this.combatant.isPlayer,
            r = (Math.pow(p, 0.35) - 0.9) * critFactor,
            r = Math.random() <= r; 
            // r calculates the crit chance
        let parentVal = this.parent(e, g, h, i, j);
    }
  });
   */