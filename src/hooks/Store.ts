"use client"

import memoizeOne, { MemoizedFn } from "memoize-one"

export default class Store {
  constructor(api: any) {
    this.api = memoizeOne(api)
  }
  api: MemoizedFn<any>
  callbacks: any[] = []
  subscribe = (callback: any) => {
    this.callbacks.push(callback)
    return () => {
      this.callbacks = this.callbacks.filter((cb) => cb !== callback)
      if (this.callbacks.length === 0) {
        this.clear()
      }
    }
  }
  getSnapshot = (...args: any[]) => {
    return this.api(...args)
  }
  clear = () => {
    this.api.clear()
  }
  invalidate = () => {
    this.api.clear()
    this.callbacks.forEach((cb) => cb())
  }
}
