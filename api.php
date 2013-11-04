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

require 'vendor/autoload.php';



use Sami\Sami;
use Symfony\Component\Finder\Finder;
use Sami\Version\GitVersionCollection;

$iterator = Finder::create()
    ->files()
    ->name('*.php')
    ->exclude('Resources')
    ->exclude('I18n')
    ->exclude('Tests')
    ->in($dir = getenv("THELIA_PATH") . '/core/lib')
;

$versions = GitVersionCollection::create($dir)
    ->addFromTags('2.*')
    ->add('master', 'master branch')
;

return new Sami($iterator, array(
    'theme'                => 'enhanced',
    'versions'             => $versions,
    'title'                => 'Thelia 2 API',
    'build_dir'            => __DIR__.'api/%version%',
    'cache_dir'            => __DIR__.'cache/api/%version%',
    'default_opened_level' => 1,
));