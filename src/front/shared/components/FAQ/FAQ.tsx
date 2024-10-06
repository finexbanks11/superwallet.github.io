import React, { useState, useEffect } from 'react'
import BigNumber from 'bignumber.js'
import InlineLoader from 'components/loaders/InlineLoader/InlineLoader'
import btcUtils from 'common/utils/coin/btc'
import ethLikeHelper from 'common/helpers/ethLikeHelper'
import { FormattedMessage, injectIntl } from 'react-intl'
import { feedback, adminFee, externalConfig } from 'helpers'
import cssModules from 'react-css-modules'
import cx from 'classnames'
import config from 'helpers/externalConfig'
import styles from './styles.scss'

const { disableInternalWallet } = config.opts.ui

const NETWORK = process.env.MAINNET
  ? 'MAINNET'
  : 'TESTNET'

const enabledCurrencies = config.opts.curEnabled
const hasOwnBeforeTabs = (config?.opts?.ui?.faq?.before && (config.opts.ui.faq.before.length > 0))
const hasOwnAfterTabs = (config?.opts?.ui?.faq?.after && (config.opts.ui.faq.after.length > 0))

const beforeTabs = {}
const beforeTabsIds = {}
if (hasOwnBeforeTabs) {
  config.opts.ui.faq.before.map((tabData, tabIndex) => {
    beforeTabs[`BEFORE_TAB_${tabIndex}`] = false
    beforeTabsIds[`BEFORE_TAB_${tabIndex}`] = `MainFaq_Before_${tabIndex}_header`
  })
}

const afterTabs = {}
const afterTabsIds = {}
if (hasOwnAfterTabs) {
  config.opts.ui.faq.after.map((tabData, tabIndex) => {
    afterTabs[`AFTER_TAB_${tabIndex}`] = false
    afterTabsIds[`AFTER_TAB_${tabIndex}`] = `MainFaq_After_${tabIndex}_header`
  })
}

const tabsIdsDictionary = {
  ...beforeTabsIds,
  FIRST_TAB: 'MainFAQ1_header',
  SECOND_TAB: 'MainFAQ2_header',
  THIRD_TAB: 'MainFAQ3_header',
  ...afterTabsIds,
}


const FAQ = function (props) {
  return null;
}

export default React.memo(cssModules(injectIntl(FAQ), styles, { allowMultiple: true }))
