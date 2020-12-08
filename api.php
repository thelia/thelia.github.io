<?php
/*************************************************************************************/
/*                                                                                   */
/*      Thelia	                                                                     */
/*                                                                                   */
/*      Copyright (c) OpenStudio                                                     */
/*      email : info@thelia.net                                                      */
/*      web : http://www.thelia.net                                                  */
/*                                                                                   */
/*      This program is free software; you can redistribute it and/or modify         */
/*      it under the terms of the GNU General Public License as published by         */
/*      the Free Software Foundation; either version 3 of the License                */
/*                                                                                   */
/*      This program is distributed in the hope that it will be useful,              */
/*      but WITHOUT ANY WARRANTY; without even the implied warranty of               */
/*      MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the                */
/*      GNU General Public License for more details.                                 */
/*                                                                                   */
/*      You should have received a copy of the GNU General Public License            */
/*	    along with this program. If not, see <http://www.gnu.org/licenses/>.         */
/*                                                                                   */
/*************************************************************************************/

use Doctum\Doctum;
use Symfony\Component\Finder\Finder;
use Doctum\Version\GitVersionCollection;

$theliaPath = getenv('THELIA_PATH') . '/core/lib';

$iterator = Finder::create()
    ->files()
    ->name('*.php')
    ->exclude('Resources')
    ->exclude('I18n')
    ->exclude('Tests')
    ->in($theliaPath);

$versions = GitVersionCollection::create($theliaPath)
    //->addFromTags('2.*')
    ->add('2.2.0', '2.2.0 tag')
    ->add('2.2.1', '2.2.1 tag')
    //->add('2.2.1', '2.2.1 tag')
    ->add('master', 'master branch');

return new Doctum($iterator, [
    'versions'             => $versions,
    'title'                => 'Thelia 2 API',
    'build_dir'            => __DIR__.'/api/%version%',
    'cache_dir'            => __DIR__.'/cache/api/%version%',
]);
