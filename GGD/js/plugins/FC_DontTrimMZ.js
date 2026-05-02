//=============================================================================
// FC_DontTrimMZ.js
//=============================================================================

/*:
 * @target MZ
 * @plugindesc Prevent the battle background from being cropped, regardless of whether it is front or side view.Also, the scaling of the battle background should not change according to the screen resolution.
 * @author Koji Marumugi
 *
 * @help This plugin does not provide plugin commands.
 * 
 * [License]
 * this plugin is released under MIT license.
 * http://opensource.org/licenses/mit-license.php
 */

/*:ja
 * @target MZ
 * @plugindesc フロントビュー、サイドビューに関わらず、戦闘背景がトリミングされないようにします。また画面の解像度にあわせて戦闘背景の拡大率が変化しないようにします。
 * @author Koji Marumugi
 *
 * @help このプラグインには、プラグインコマンドはありません。
 * 
 * ■ライセンス表記
 * このプラグインは MIT ライセンスで配布されます。
 * ご自由にお使いください。
 * http://opensource.org/licenses/mit-license.php
 */

(()=>{
    'use strict';

    const _sprite_Battleback_adjustPosition = Sprite_Battleback.prototype.adjustPosition;
    Sprite_Battleback.prototype.adjustPosition = function() {
        _sprite_Battleback_adjustPosition.apply(this, arguments);

        if ($gameSystem.isSideView()) {
            this.y = 0;
        } 
        this.scale.x = 1;
        this.scale.y = 1;
    }

})();