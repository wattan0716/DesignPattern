namespace Singleton {
    export class StateManager {
        private static stateManager: StateManager = null;
        private constructor() { }

        /**
         * インスタンスの取得
         **/
        public static get StateManager(): StateManager {
            if (!this.stateManager) {
                this.stateManager = this;
                console.log(`Create Instance`);
            }
            return this.stateManager;
        }
    }
}