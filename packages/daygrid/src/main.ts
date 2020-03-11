import { createPlugin } from '@fullcalendar/core'
import DayTableView from './DayTableView'
import './main.scss'

export { default as DayTable, DayTableSlicer } from './DayTable'
export { default as Table } from './Table'
export { default as TableSeg } from './TableSeg'
export { TableCellModel } from './TableCell'
export { default as TableView } from './TableView'
export { buildDayTableModel } from './DayTableView'
export { DayTableView as DayGridView } // export as old name!

export default createPlugin({
  defaultView: 'dayGridMonth',
  views: {

    dayGrid: DayTableView, // sort of a name mismatch. okay

    dayGridDay: {
      type: 'dayGrid',
      duration: { days: 1 }
    },

    dayGridWeek: {
      type: 'dayGrid',
      duration: { weeks: 1 }
    },

    dayGridMonth: {
      type: 'dayGrid',
      duration: { months: 1 },
      monthMode: true,
      fixedWeekCount: true
    }

  }
})
