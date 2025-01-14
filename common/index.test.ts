/*
 *   Copyright 2020 Amazon.com, Inc. or its affiliates. All Rights Reserved.
 *
 *   Licensed under the Apache License, Version 2.0 (the "License").
 *   You may not use this file except in compliance with the License.
 *   A copy of the License is located at
 *
 *       http://www.apache.org/licenses/LICENSE-2.0
 *
 *   or in the "license" file accompanying this file. This file is distributed
 *   on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either
 *   express or implied. See the License for the specific language governing
 *   permissions and limitations under the License.
 */

import { isValidResourceName } from './index';

describe('Test isValidResourceName', () => {
  it('Empty is invalid', () => {
    expect(isValidResourceName('')).toBe(false);
  });

  it('Length 1 is valid', () => {
    expect(isValidResourceName('a')).toBe(true);
  });

  it('Dash, underscore, bracket, number and letter are valid', () => {
    expect(isValidResourceName('-_(1)a')).toBe(true);
  });

  it('Dot is invalid', () => {
    expect(isValidResourceName('.')).toBe(false);
  });

  it('Slash is invalid', () => {
    expect(isValidResourceName('/')).toBe(false);
  });

  it('Percent sign is invalid', () => {
    expect(isValidResourceName('%')).toBe(false);
  });

  it('Question mark is invalid', () => {
    expect(isValidResourceName('?')).toBe(false);
  });

  it('Hash is invalid', () => {
    expect(isValidResourceName('#')).toBe(false);
  });

  it('And sign is invalid', () => {
    expect(isValidResourceName('&')).toBe(false);
  });

  it('Unicode is valid', () => {
    expect(isValidResourceName('Düsseldorf_Köln_Москва_北京市_إسرائيل')).toBe(true);
  });
});
