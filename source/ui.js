'use strict';
const path = require('path');
const {h, Text} = require('ink');
const SelectInput = require('ink-select-input');
const opn = require('opn');
const terminalImage = require('terminal-image');

const open = url => opn(url, {wait: false});

const handleSelect = item => {
  if (item.url) {
    open(item.url);
  }

  if (item.action) {
    item.action();
  }
};

const items = [
  {
    label: 'GitHub',
    url: 'https://github.com/sawadashota'
  },
  {
    label: 'Qiita',
    url: 'https://qiita.com/sawadashota'
  },
  {
    label: 'Good Cafe in Ho Chi Minh',
    url: 'https://cafe.ho-chi-minh.info/'
  },
  {
    label: 'Twitter',
    url: 'https://twitter.com/xioota'
  },
  {
    label: 'Blog',
    url: 'http://www.sslife.tech/'
  },
  {
    label: 'Wish List',
    url: 'http://amzn.asia/4s8f7XY'
  },
  // TODO: Add separator item here when https://github.com/vadimdemedes/ink-select-input/issues/4 is done
  {
    label: 'Quit',
    action() {
      process.exit(); // eslint-disable-line unicorn/no-process-exit
    }
  }
];

module.exports = () => (
  <div>
    <br/>
    <div>
      <Text>Introduce good cafes in Ho Chi Minh city</Text>
    </div>
    <br/>
    <SelectInput items={items} onSelect={handleSelect}/>
  </div>
);
