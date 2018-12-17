/**
 *
 *  Copyright 2016 Netflix, Inc.
 *
 *     Licensed under the Apache License, Version 2.0 (the "License");
 *     you may not use this file except in compliance with the License.
 *     You may obtain a copy of the License at
 *
 *         http://www.apache.org/licenses/LICENSE-2.0
 *
 *     Unless required by applicable law or agreed to in writing, software
 *     distributed under the License is distributed on an "AS IS" BASIS,
 *     WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *     See the License for the specific language governing permissions and
 *     limitations under the License.
 *
 */
import Connection from '../base/connection';
import GlobalConnectionView from './globalConnectionView';

class GlobalConnection extends Connection {
  constructor (options) {
    super(options);
    this.graphRenderer = 'global';
    this.magnitude = 0;
  }

  update (data) {
    super.update(data);
    if (this.source.isEntryNode() && data.metrics) {
      this.target.loaded = true;
    }
  }

  render () {
    this.view = new GlobalConnectionView(this);
    if (this.magnitude && this.magnitude !== 0) {
      this.view.setMagnitude(this.magnitude);
    }
  }

  setMagnitude (value) {
    if (this.view) {
      this.view.setMagnitude(value);
    }
    this.magnitude = value;
  }

  isInteractive () {
    return false;
  }
}

export default GlobalConnection;
