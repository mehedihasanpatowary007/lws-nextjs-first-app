import React from 'react'

function AnalyticsPage() {
    throw new Error("Error occurred inside the analytics page.")
  return (
    <div>AnalyticsPage</div>
  )
}

export default AnalyticsPage
export function generateMetadata() {
  return {
    title: "Analytics",
    description: "This is Analytics page",
  };
}