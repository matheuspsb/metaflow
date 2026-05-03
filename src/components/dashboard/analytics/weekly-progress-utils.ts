export type Point = { x: number; y: number }

export const VIEWBOX_WIDTH = 280
export const VIEWBOX_HEIGHT = 120

export const CHART = {
  left: 26,
  right: VIEWBOX_WIDTH - 2,
  top: 16,
  bottom: 96,
}

export const Y_LABELS = [100, 75, 50, 25, 0]

export function yPos(value: number): number {
  return CHART.top + ((100 - value) / 100) * (CHART.bottom - CHART.top)
}

export function xPos(index: number, totalItems: number): number {
  return CHART.left + (index / (totalItems - 1)) * (CHART.right - CHART.left)
}

export function smoothPath(points: Point[]): string {
  if (points.length < 2) return ''
  let path = `M ${points[0].x} ${points[0].y}`
  for (let i = 1; i < points.length; i++) {
    const prevPoint = points[i - 1]
    const nextPoint = points[i]
    const controlOffset = (nextPoint.x - prevPoint.x) / 2.5
    path += ` C ${prevPoint.x + controlOffset},${prevPoint.y} ${nextPoint.x - controlOffset},${nextPoint.y} ${nextPoint.x},${nextPoint.y}`
  }
  return path
}
