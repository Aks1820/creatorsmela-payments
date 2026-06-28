export default function StatusBadge({ status }) {
  const styles = {
    paid:    'bg-green-50 text-green-700',
    pending: 'bg-yellow-50 text-yellow-700',
    failed:  'bg-red-50 text-red-700',
  }
  const labels = {
    paid: 'Paid',
    pending: 'Pending',
    failed: 'Failed',
  }
  return (
    <span className={`text-xs font-medium px-2.5 py-1 rounded-full ${styles[status]}`}>
      {labels[status]}
    </span>
  )
}
