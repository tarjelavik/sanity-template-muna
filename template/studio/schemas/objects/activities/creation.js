import {timespan, carriedOutBy, tookPlaceAt} from '../../props'
export default {
  title: 'Creation',
  name: 'creation',
  type: 'object',
  fields: [carriedOutBy, timespan, tookPlaceAt],
  preview: {
    select: {
      creator: 'carriedOutBy.0.actor.label',
      bb: 'timespan.0.beginOfTheBegin',
      eb: 'timespan.0.endOfTheBegin',
      date: 'timespan.0.date',
      be: 'timespan.0.beginOfTheEnd',
      ee: 'timespan.0.endOfTheEnd',
    },
    prepare(selection) {
      var dayjs = require('dayjs')
      var _ = require('lodash')
      var localizedFormat = require('dayjs/plugin/localizedFormat')
      dayjs.extend(localizedFormat)
      require('dayjs/locale/nb')

      const {creator, bb, eb, date, be, ee} = selection
      var dates = _.pickBy({bb: bb, eb: eb, date: date, be: be, ee: ee}, _.identity)

      let d = Object.assign(
        {},
        ...Object.keys(dates).map((k) => ({[k]: dayjs(dates[k]).locale('nb').format('LL')})),
      )

      return {
        title: `Creation, by ${creator}`,
        subtitle:
          `${d.date || ''}${d.bb || ''}${d.bb && d.eb ? '~' : ''}${d.eb || ''}` +
          `${(d.bb || d.eb) && (d.be || d.ee) ? ' / ' : ''}` +
          `${d.be || ''}${d.be && d.ee ? '~' : ''}${d.ee || ''}`,
      }
    },
  },
}
