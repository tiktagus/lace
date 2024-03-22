import { Translations } from '../types';

export const en: Translations = {
  'activity.rewardsChart.all': 'All',
  'activity.rewardsChart.epoch': 'Epoch',
  'activity.rewardsChart.epochs': 'Epochs',
  'activity.rewardsChart.last': 'Last',
  'activity.rewardsChart.rewards': 'Rewards',
  'activity.rewardsChart.title': 'Rewards',
  'activity.rewardsHistory.noStakingActivityYet': 'No staking activity yet.',
  'activity.rewardsHistory.title': 'History',
  'browsePools.header.poolsCount': 'Pools ({{poolsCount}})',
  'browsePools.preferencesCard.filter.input.from': 'From',
  'browsePools.preferencesCard.filter.input.select': 'Select',
  'browsePools.preferencesCard.filter.input.to': 'To',
  'browsePools.preferencesCard.filter.performance': 'Performance',
  'browsePools.preferencesCard.filter.profitMargin': 'Profit Margin',
  'browsePools.preferencesCard.filter.ros.lastEpoch': 'Last epoch',
  'browsePools.preferencesCard.filter.ros.other': 'other',
  'browsePools.preferencesCard.filter.ros.title': 'ROS',
  'browsePools.preferencesCard.filter.saturation': 'saturation',
  'browsePools.preferencesCard.headers.filters': 'Filters',
  'browsePools.preferencesCard.headers.moreOptions': 'More options',
  'browsePools.preferencesCard.headers.sorting': 'Sorting',
  'browsePools.preferencesCard.sort.blocks': 'Produced blocks',
  'browsePools.preferencesCard.sort.cost': 'Cost',
  'browsePools.preferencesCard.sort.liveStake': 'Live Stake',
  'browsePools.preferencesCard.sort.margin': 'Margin',
  'browsePools.preferencesCard.sort.pledge': 'Pledge',
  'browsePools.preferencesCard.sort.ros': 'ROS',
  'browsePools.preferencesCard.sort.saturation': 'Saturation',
  'browsePools.preferencesCard.sort.ticker': 'Ticker name',
  'browsePools.stakePoolGrid.notAvailable': 'N/A',
  'browsePools.stakePoolGrid.selected': 'Selected',
  'browsePools.stakePoolTableBrowser.addPool': 'Add pool',
  'browsePools.stakePoolTableBrowser.emptyMessage': 'No results matching your search',
  'browsePools.stakePoolTableBrowser.searchInputPlaceholder': 'Search by pool name, ticker, or ID',
  'browsePools.stakePoolTableBrowser.stake': 'Stake',
  'browsePools.stakePoolTableBrowser.unselect': 'Unselect',
  'browsePools.tableHeaders.blocks': 'Blocks',
  'browsePools.tableHeaders.cost': 'Cost',
  'browsePools.tableHeaders.liveStake': 'Live Stake',
  'browsePools.tableHeaders.margin': 'Margin',
  'browsePools.tableHeaders.pledge': 'Pledge',
  'browsePools.tableHeaders.ros': 'ROS',
  'browsePools.tableHeaders.saturation': 'Saturation',
  'browsePools.tableHeaders.ticker': 'Ticker',
  'browsePools.tooltips.blocks': 'The total number of produced blocks the stake pool has produced.',
  'browsePools.tooltips.cost':
    'Fixed operational costs that the stake pool retains from any rewards earned during each epoch',
  'browsePools.tooltips.liveStake':
    'Measures the amount of stake pledged by the pool plus the amount of stake currently delegated to the pool, versus the total amount in the system.',
  'browsePools.tooltips.margin':
    "The pool's profit, defined as the rewards percentage kept by the pool from the stake that was delegated to it.",
  'browsePools.tooltips.maxNumberPoolsSelected': 'Maximum number of pools selected',
  'browsePools.tooltips.pledge':
    'The amount of stake that a pool operator contributes to a pool. Pools with higher pledge amounts earn more rewards for themselves and their delegators. Pools that do not honor their pledge earn zero rewards and accrue low ranking.',
  'browsePools.tooltips.ros':
    "An estimation of the potential rewards you will earn per epoch if you delegate the intended amount of stake. The system looks at the pool's parameters and historical performance data to calculate potential rewards, assuming that the pool reaches optimal saturation.",
  'browsePools.tooltips.saturation': 'Once a pool reaches the point of saturation, it will offer diminishing rewards.',
  'browsePools.tooltips.ticker': 'Refers to the unique identifier of a staking pool',
  'drawer.confirmation.button.confirm': 'Next',
  'drawer.confirmation.button.confirmWithDevice': 'Confirm with {{hardwareWallet}}',
  'drawer.confirmation.button.continueInAdvancedView': 'Continue in Advanced View',
  'drawer.confirmation.button.signing': 'Signing in progress',
  'drawer.confirmation.cardanoName': 'Cardano',
  'drawer.confirmation.chargedDepositAmountInfo': "The amount you'll be charged for registering your stake key.",
  'drawer.confirmation.errors.utxoBalanceInsufficient': 'Balance Insufficient',
  'drawer.confirmation.errors.utxoFullyDepleted': 'UTxO Fully Depleted',
  'drawer.confirmation.noPools': 'No pools',
  'drawer.confirmation.reclaimDepositAmountInfo': "The amount you'll be awarded for de-registering your stake key.",
  'drawer.confirmation.stakingDeposit': 'Staking deposit',
  'drawer.confirmation.subTitle': 'Confirm the amount and the stake pool',
  'drawer.confirmation.theAmountYoullBeChargedToProcessYourTransaction':
    "The amount you'll be charged to process your transaction",
  'drawer.confirmation.title': 'Confirmation',
  'drawer.confirmation.transactionCost.title': 'Transaction cost',
  'drawer.confirmation.transactionFee': 'Transaction fee',
  'drawer.confirmation.transactionReturn.title': 'Transaction return',
  'drawer.confirmation.transactionTotal.title': 'Total',
  'drawer.details.addStakingPool': 'Add staking pool',
  'drawer.details.information': 'Information',
  'drawer.details.manageDelegation': 'Manage delegation',
  'drawer.details.metrics.activeStake': 'Active stake',
  'drawer.details.metrics.blocks': 'Blocks',
  'drawer.details.metrics.cost': 'Cost p/ epoch',
  'drawer.details.metrics.delegators': 'Delegators',
  'drawer.details.metrics.liveStake': 'Live stake',
  'drawer.details.metrics.margin': 'Pool margin',
  'drawer.details.metrics.pledge': 'Pledge',
  'drawer.details.metrics.ros': 'ROS',
  'drawer.details.metrics.saturation': 'Saturation',
  'drawer.details.owners': 'Owners',
  'drawer.details.poolIds': 'Pool IDs',
  'drawer.details.selectForMultiStaking': 'Select pool for multi-staking',
  'drawer.details.social': 'Social links',
  'drawer.details.stakeOnPoolButton': 'Stake all on this pool',
  'drawer.details.statistics': 'Statistics',
  'drawer.details.status.delegating': 'You are delegating to this pool',
  'drawer.details.status.retired': 'This pool is retired. Re-delegate to an other pool to receive rewards',
  'drawer.details.status.retiring': 'This pool is retiring. Re-delegate to an other pool to avoid losing rewards',
  'drawer.details.status.saturated': 'This pool is too saturated. Stake on another pool to avoid losing rewards',
  'drawer.details.unselectPool': 'Unselect pool',
  'drawer.failure.button.back': 'Back',
  'drawer.failure.button.cancel': 'Cancel',
  'drawer.failure.button.close': 'Close',
  'drawer.failure.button.removePools': 'Remove pools',
  'drawer.failure.button.retry': 'Retry',
  'drawer.failure.deviceUpdate.subTitle':
    'Your device needs to be up to date in order to use Multi-delegation. You can still delegate to a single pool with your current version',
  'drawer.failure.deviceUpdate.title': 'Device update required',
  'drawer.failure.subTitle': 'The transaction was not successful. Please try again.',
  'drawer.failure.title': 'Oops! Something went wrong...',
  'drawer.preferences.addPoolButton': 'Add stake pool',
  'drawer.preferences.browsePools': 'Browse pools',
  'drawer.preferences.confirmButton': 'Confirm new portfolio',
  'drawer.preferences.ctaButtonTooltip.invalidAllocation': 'You need to have a 100% allocation in order to proceed',
  'drawer.preferences.ctaButtonTooltip.zeroPercentageSliderError':
    'Every portfolio pool requires more than 0% allocation',
  'drawer.preferences.noSelectedPools': "You don't have any staking pool selected",
  'drawer.preferences.pickMorePools': 'You need to stake at least to one pool.',
  'drawer.preferences.poolDetails.actualRatio': 'Actual ratio',
  'drawer.preferences.poolDetails.actualRatioTooltip':
    'The current ratio of your stake in this pool as verified by the on-chain state.',
  'drawer.preferences.poolDetails.actualStake': 'Actual stake',
  'drawer.preferences.poolDetails.actualStakeTooltip':
    'The amount of ADA currently staked in this pool as verified by the on-chain state.',
  'drawer.preferences.poolDetails.savedRatio': 'Saved ratio',
  'drawer.preferences.poolDetails.savedRatioTooltip':
    'The ratio previously saved for this pool. Note: This may not reflect the current on-chain state due to potential stake drift.',
  'drawer.preferences.rebalanceButton': 'Rebalance portfolio',
  'drawer.preferences.removePoolButton': 'Remove pool from portfolio',
  'drawer.preferences.selectedStakePools': 'Selected stake pools ({{count}})',
  'drawer.sign.confirmation.title': 'Staking confirmation',
  'drawer.sign.enterWalletPasswordToConfirmTransaction': 'Enter your wallet password to confirm transaction',
  'drawer.sign.error.invalidPassword': 'Wrong password',
  'drawer.sign.passwordPlaceholder': 'Password',
  'drawer.success.modification.title': 'Hurray! Your modification has been submitted',
  'drawer.success.subTitle': "You'll start receiving your staking rewards after two epochs.",
  'drawer.success.switchedPools.subTitle':
    "You'll start receiving your staking rewards from the new pool after two epochs. Until then you'll continue receiving rewards from the previous one.",
  'drawer.success.switchedPools.title': "Hurray! You've switched pools",
  'drawer.success.title': "Hurray! You've staked your funds",
  'drawer.title': 'Stake pool detail',
  'drawer.titleSecond': 'Manage staking',
  'general.button.close': 'Close',
  'general.button.confirm': 'Confirm',
  'modals.beta.button': 'Got it',
  'modals.beta.description':
    'This feature allows you to stake to up to {{maxPools}} pools. This is still in beta version, so some functionality might not be available. Read more about multi-delegation in our <Link>dedicated blog.</Link>',
  'modals.beta.pill': 'Beta',
  'modals.beta.portfolioPersistence.description':
    "Lace now supports on-chain portfolio persistence! This feature helps protect portfolios from significant drift and ensures cross-device syncing. If you've previously submitted a delegation, please resubmit your current (or a new) delegation to enable on-chain portfolio persistence.",
  'modals.beta.portfolioPersistence.title': 'Multi-delegation: Portfolio Persistence',
  'modals.beta.title': 'Multi-delegation',
  'modals.changingPreferences.buttons.cancel': 'Cancel',
  'modals.changingPreferences.buttons.confirm': 'Fine by me',
  'modals.changingPreferences.description':
    "That's totally fine! Just please note that you'll continue receiving rewards from your former pool(s) for two epochs. After that, you'll start to receiving rewards from your new pool(s).",
  'modals.changingPreferences.title': 'Changing staking preferences?',
  'modals.poolsManagement.buttons.cancel': 'Cancel',
  'modals.poolsManagement.buttons.confirm': 'Fine by me',
  'modals.poolsManagement.description.adjustment':
    "Reducing pool numbers needs a stake key de-registration, triggering the return of the initial ADA deposit and possibly losing any undistributed rewards. When changing pools, you'll get rewards from the former pool for two epochs, then start receiving them from the new pool.",
  'modals.poolsManagement.description.reduction':
    'Reducing your pool count requires stake key de-registration, which returns the initial ADA deposit and may cause the loss of undistributed rewards in the calculation epoch phase.',
  'modals.poolsManagement.title': 'Switching Pool?',
  'overview.banners.pendingFirstDelegation.message':
    'You will see your staking portfolio here once the transaction has been validated',
  'overview.banners.pendingFirstDelegation.title': 'Your staking transaction has been submitted',
  'overview.banners.pendingPortfolioModification.message':
    'In case of changing pools you will continue to receive rewards from your former stake pool(s) for two epochs',
  'overview.banners.pendingPortfolioModification.title': 'You are modifying your staking portfolio',
  'overview.banners.portfolioDrifted.message':
    'Make sure to rebalance your staking ratios if you want to match your preferences',
  'overview.banners.portfolioDrifted.title': 'Your current delegation portfolio has shifted',
  'overview.banners.saturatedOrRetiredPool.message': 'Please make sure to choose other pool(s) to avoid losing rewards',
  'overview.banners.saturatedOrRetiredPool.title': 'One or several of your pools are too saturated / retired',
  'overview.delegationCard.label.balance': 'ADA Balance',
  'overview.delegationCard.label.pools': 'Pool(s)',
  'overview.delegationCard.label.status': 'Status',
  'overview.delegationCard.statuses.multiDelegation': 'Multi delegation',
  'overview.delegationCard.statuses.noSelection': 'No selection',
  'overview.delegationCard.statuses.overAllocated': 'Over allocated',
  'overview.delegationCard.statuses.simpleDelegation': 'Simple delegation',
  'overview.delegationCard.statuses.underAllocated': 'Under allocated',
  'overview.noFunds.button': 'Copy address',
  'overview.noFunds.description': 'Add funds to start staking',
  'overview.noFunds.title': 'Welcome',
  'overview.noStaking.balanceTitle': 'Available balance',
  'overview.noStaking.description': 'Stake your funds on up to {{maxPools}} pools to start receiving rewards.',
  'overview.noStaking.followSteps': 'Follow these steps to start staking your funds',
  'overview.noStaking.getStarted': 'Get started',
  'overview.noStaking.searchForPoolDescription':
    'Click the Stake Pools tab or click <Link>here</Link> then search for your desired pool.',
  'overview.noStaking.searchForPoolTitle': 'Browse stake pools',
  'overview.noStaking.selectPoolsDescription':
    'You can select up to {{maxPools}} pools to delegate to. Click <Link>here</Link> to learn more.',
  'overview.noStaking.selectPoolsTitle': 'Select one or more pools to stake to',
  'overview.noStaking.title': 'Start staking',
  'overview.stakingInfoCard.fee': 'Fee',
  'overview.stakingInfoCard.lastReward': 'Last reward',
  'overview.stakingInfoCard.margin': 'Margin',
  'overview.stakingInfoCard.poolRetired': 'Pool retired',
  'overview.stakingInfoCard.poolRetiring': 'Pool retiring',
  'overview.stakingInfoCard.poolSaturated': 'Pool over-saturated',
  'overview.stakingInfoCard.ros': 'ROS',
  'overview.stakingInfoCard.tooltipFiatLabel': '{{currencyCode}} Value',
  'overview.stakingInfoCard.totalRewards': 'Total rewards',
  'overview.stakingInfoCard.totalStaked': 'Total staked',
  'overview.yourPoolsSection.heading': 'Your pools',
  'overview.yourPoolsSection.manageButtonLabel': 'Manage',
  'popup.expandBanner.button': 'Expand view',
  'popup.expandBanner.description': 'Get more information on the network and the pool in the browser experience',
  'popup.expandBanner.title': 'There is more!',
  'portfolioBar.clear': 'Clear',
  'portfolioBar.maxPools': '(max {{maxPoolsCount}})',
  'portfolioBar.next': 'Next',
  'portfolioBar.selectedPools': '{{selectedPoolsCount}} pools selected',
  'root.nav.activityTitle': 'Activity',
  'root.nav.browsePoolsTitle': 'Browse pools',
  'root.nav.overviewTitle': 'Overview',
  'root.nav.title': 'Staking Navigation',
  'root.title': 'Staking',
};
