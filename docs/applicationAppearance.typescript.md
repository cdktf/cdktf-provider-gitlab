# `applicationAppearance` Submodule <a name="`applicationAppearance` Submodule" id="@cdktf/provider-gitlab.applicationAppearance"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ApplicationAppearance <a name="ApplicationAppearance" id="@cdktf/provider-gitlab.applicationAppearance.ApplicationAppearance"></a>

Represents a {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.4.0/docs/resources/application_appearance gitlab_application_appearance}.

#### Initializers <a name="Initializers" id="@cdktf/provider-gitlab.applicationAppearance.ApplicationAppearance.Initializer"></a>

```typescript
import { applicationAppearance } from '@cdktf/provider-gitlab'

new applicationAppearance.ApplicationAppearance(scope: Construct, id: string, config?: ApplicationAppearanceConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.applicationAppearance.ApplicationAppearance.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-gitlab.applicationAppearance.ApplicationAppearance.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-gitlab.applicationAppearance.ApplicationAppearance.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-gitlab.applicationAppearance.ApplicationAppearanceConfig">ApplicationAppearanceConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-gitlab.applicationAppearance.ApplicationAppearance.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-gitlab.applicationAppearance.ApplicationAppearance.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Optional</sup> <a name="config" id="@cdktf/provider-gitlab.applicationAppearance.ApplicationAppearance.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-gitlab.applicationAppearance.ApplicationAppearanceConfig">ApplicationAppearanceConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-gitlab.applicationAppearance.ApplicationAppearance.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-gitlab.applicationAppearance.ApplicationAppearance.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationAppearance.ApplicationAppearance.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-gitlab.applicationAppearance.ApplicationAppearance.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-gitlab.applicationAppearance.ApplicationAppearance.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationAppearance.ApplicationAppearance.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationAppearance.ApplicationAppearance.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-gitlab.applicationAppearance.ApplicationAppearance.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-gitlab.applicationAppearance.ApplicationAppearance.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationAppearance.ApplicationAppearance.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationAppearance.ApplicationAppearance.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationAppearance.ApplicationAppearance.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationAppearance.ApplicationAppearance.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationAppearance.ApplicationAppearance.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationAppearance.ApplicationAppearance.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationAppearance.ApplicationAppearance.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationAppearance.ApplicationAppearance.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationAppearance.ApplicationAppearance.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationAppearance.ApplicationAppearance.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationAppearance.ApplicationAppearance.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationAppearance.ApplicationAppearance.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-gitlab.applicationAppearance.ApplicationAppearance.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-gitlab.applicationAppearance.ApplicationAppearance.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-gitlab.applicationAppearance.ApplicationAppearance.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationAppearance.ApplicationAppearance.resetEmailHeaderAndFooterEnabled">resetEmailHeaderAndFooterEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationAppearance.ApplicationAppearance.resetFooterMessage">resetFooterMessage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationAppearance.ApplicationAppearance.resetHeaderMessage">resetHeaderMessage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationAppearance.ApplicationAppearance.resetKeepSettingsOnDestroy">resetKeepSettingsOnDestroy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationAppearance.ApplicationAppearance.resetMemberGuidelines">resetMemberGuidelines</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationAppearance.ApplicationAppearance.resetMessageBackgroundColor">resetMessageBackgroundColor</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationAppearance.ApplicationAppearance.resetMessageFontColor">resetMessageFontColor</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationAppearance.ApplicationAppearance.resetNewProjectGuidelines">resetNewProjectGuidelines</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationAppearance.ApplicationAppearance.resetProfileImageGuidelines">resetProfileImageGuidelines</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationAppearance.ApplicationAppearance.resetPwaDescription">resetPwaDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationAppearance.ApplicationAppearance.resetPwaName">resetPwaName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationAppearance.ApplicationAppearance.resetPwaShortName">resetPwaShortName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationAppearance.ApplicationAppearance.resetTitle">resetTitle</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-gitlab.applicationAppearance.ApplicationAppearance.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-gitlab.applicationAppearance.ApplicationAppearance.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-gitlab.applicationAppearance.ApplicationAppearance.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-gitlab.applicationAppearance.ApplicationAppearance.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-gitlab.applicationAppearance.ApplicationAppearance.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-gitlab.applicationAppearance.ApplicationAppearance.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-gitlab.applicationAppearance.ApplicationAppearance.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-gitlab.applicationAppearance.ApplicationAppearance.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-gitlab.applicationAppearance.ApplicationAppearance.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-gitlab.applicationAppearance.ApplicationAppearance.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-gitlab.applicationAppearance.ApplicationAppearance.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-gitlab.applicationAppearance.ApplicationAppearance.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-gitlab.applicationAppearance.ApplicationAppearance.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.applicationAppearance.ApplicationAppearance.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-gitlab.applicationAppearance.ApplicationAppearance.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.applicationAppearance.ApplicationAppearance.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-gitlab.applicationAppearance.ApplicationAppearance.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.applicationAppearance.ApplicationAppearance.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-gitlab.applicationAppearance.ApplicationAppearance.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.applicationAppearance.ApplicationAppearance.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-gitlab.applicationAppearance.ApplicationAppearance.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.applicationAppearance.ApplicationAppearance.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-gitlab.applicationAppearance.ApplicationAppearance.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.applicationAppearance.ApplicationAppearance.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-gitlab.applicationAppearance.ApplicationAppearance.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.applicationAppearance.ApplicationAppearance.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-gitlab.applicationAppearance.ApplicationAppearance.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.applicationAppearance.ApplicationAppearance.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-gitlab.applicationAppearance.ApplicationAppearance.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.applicationAppearance.ApplicationAppearance.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-gitlab.applicationAppearance.ApplicationAppearance.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-gitlab.applicationAppearance.ApplicationAppearance.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-gitlab.applicationAppearance.ApplicationAppearance.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-gitlab.applicationAppearance.ApplicationAppearance.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-gitlab.applicationAppearance.ApplicationAppearance.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.applicationAppearance.ApplicationAppearance.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-gitlab.applicationAppearance.ApplicationAppearance.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-gitlab.applicationAppearance.ApplicationAppearance.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-gitlab.applicationAppearance.ApplicationAppearance.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-gitlab.applicationAppearance.ApplicationAppearance.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-gitlab.applicationAppearance.ApplicationAppearance.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-gitlab.applicationAppearance.ApplicationAppearance.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-gitlab.applicationAppearance.ApplicationAppearance.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-gitlab.applicationAppearance.ApplicationAppearance.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetEmailHeaderAndFooterEnabled` <a name="resetEmailHeaderAndFooterEnabled" id="@cdktf/provider-gitlab.applicationAppearance.ApplicationAppearance.resetEmailHeaderAndFooterEnabled"></a>

```typescript
public resetEmailHeaderAndFooterEnabled(): void
```

##### `resetFooterMessage` <a name="resetFooterMessage" id="@cdktf/provider-gitlab.applicationAppearance.ApplicationAppearance.resetFooterMessage"></a>

```typescript
public resetFooterMessage(): void
```

##### `resetHeaderMessage` <a name="resetHeaderMessage" id="@cdktf/provider-gitlab.applicationAppearance.ApplicationAppearance.resetHeaderMessage"></a>

```typescript
public resetHeaderMessage(): void
```

##### `resetKeepSettingsOnDestroy` <a name="resetKeepSettingsOnDestroy" id="@cdktf/provider-gitlab.applicationAppearance.ApplicationAppearance.resetKeepSettingsOnDestroy"></a>

```typescript
public resetKeepSettingsOnDestroy(): void
```

##### `resetMemberGuidelines` <a name="resetMemberGuidelines" id="@cdktf/provider-gitlab.applicationAppearance.ApplicationAppearance.resetMemberGuidelines"></a>

```typescript
public resetMemberGuidelines(): void
```

##### `resetMessageBackgroundColor` <a name="resetMessageBackgroundColor" id="@cdktf/provider-gitlab.applicationAppearance.ApplicationAppearance.resetMessageBackgroundColor"></a>

```typescript
public resetMessageBackgroundColor(): void
```

##### `resetMessageFontColor` <a name="resetMessageFontColor" id="@cdktf/provider-gitlab.applicationAppearance.ApplicationAppearance.resetMessageFontColor"></a>

```typescript
public resetMessageFontColor(): void
```

##### `resetNewProjectGuidelines` <a name="resetNewProjectGuidelines" id="@cdktf/provider-gitlab.applicationAppearance.ApplicationAppearance.resetNewProjectGuidelines"></a>

```typescript
public resetNewProjectGuidelines(): void
```

##### `resetProfileImageGuidelines` <a name="resetProfileImageGuidelines" id="@cdktf/provider-gitlab.applicationAppearance.ApplicationAppearance.resetProfileImageGuidelines"></a>

```typescript
public resetProfileImageGuidelines(): void
```

##### `resetPwaDescription` <a name="resetPwaDescription" id="@cdktf/provider-gitlab.applicationAppearance.ApplicationAppearance.resetPwaDescription"></a>

```typescript
public resetPwaDescription(): void
```

##### `resetPwaName` <a name="resetPwaName" id="@cdktf/provider-gitlab.applicationAppearance.ApplicationAppearance.resetPwaName"></a>

```typescript
public resetPwaName(): void
```

##### `resetPwaShortName` <a name="resetPwaShortName" id="@cdktf/provider-gitlab.applicationAppearance.ApplicationAppearance.resetPwaShortName"></a>

```typescript
public resetPwaShortName(): void
```

##### `resetTitle` <a name="resetTitle" id="@cdktf/provider-gitlab.applicationAppearance.ApplicationAppearance.resetTitle"></a>

```typescript
public resetTitle(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-gitlab.applicationAppearance.ApplicationAppearance.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-gitlab.applicationAppearance.ApplicationAppearance.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationAppearance.ApplicationAppearance.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationAppearance.ApplicationAppearance.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a ApplicationAppearance resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-gitlab.applicationAppearance.ApplicationAppearance.isConstruct"></a>

```typescript
import { applicationAppearance } from '@cdktf/provider-gitlab'

applicationAppearance.ApplicationAppearance.isConstruct(x: any)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-gitlab.applicationAppearance.ApplicationAppearance.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-gitlab.applicationAppearance.ApplicationAppearance.isTerraformElement"></a>

```typescript
import { applicationAppearance } from '@cdktf/provider-gitlab'

applicationAppearance.ApplicationAppearance.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-gitlab.applicationAppearance.ApplicationAppearance.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-gitlab.applicationAppearance.ApplicationAppearance.isTerraformResource"></a>

```typescript
import { applicationAppearance } from '@cdktf/provider-gitlab'

applicationAppearance.ApplicationAppearance.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-gitlab.applicationAppearance.ApplicationAppearance.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-gitlab.applicationAppearance.ApplicationAppearance.generateConfigForImport"></a>

```typescript
import { applicationAppearance } from '@cdktf/provider-gitlab'

applicationAppearance.ApplicationAppearance.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a ApplicationAppearance resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-gitlab.applicationAppearance.ApplicationAppearance.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-gitlab.applicationAppearance.ApplicationAppearance.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the ApplicationAppearance to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-gitlab.applicationAppearance.ApplicationAppearance.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing ApplicationAppearance that should be imported.

Refer to the {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.4.0/docs/resources/application_appearance#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-gitlab.applicationAppearance.ApplicationAppearance.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the ApplicationAppearance to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.applicationAppearance.ApplicationAppearance.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-gitlab.applicationAppearance.ApplicationAppearance.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationAppearance.ApplicationAppearance.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationAppearance.ApplicationAppearance.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationAppearance.ApplicationAppearance.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationAppearance.ApplicationAppearance.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationAppearance.ApplicationAppearance.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationAppearance.ApplicationAppearance.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationAppearance.ApplicationAppearance.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationAppearance.ApplicationAppearance.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationAppearance.ApplicationAppearance.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationAppearance.ApplicationAppearance.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationAppearance.ApplicationAppearance.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationAppearance.ApplicationAppearance.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationAppearance.ApplicationAppearance.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationAppearance.ApplicationAppearance.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationAppearance.ApplicationAppearance.property.emailHeaderAndFooterEnabledInput">emailHeaderAndFooterEnabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationAppearance.ApplicationAppearance.property.footerMessageInput">footerMessageInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationAppearance.ApplicationAppearance.property.headerMessageInput">headerMessageInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationAppearance.ApplicationAppearance.property.keepSettingsOnDestroyInput">keepSettingsOnDestroyInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationAppearance.ApplicationAppearance.property.memberGuidelinesInput">memberGuidelinesInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationAppearance.ApplicationAppearance.property.messageBackgroundColorInput">messageBackgroundColorInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationAppearance.ApplicationAppearance.property.messageFontColorInput">messageFontColorInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationAppearance.ApplicationAppearance.property.newProjectGuidelinesInput">newProjectGuidelinesInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationAppearance.ApplicationAppearance.property.profileImageGuidelinesInput">profileImageGuidelinesInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationAppearance.ApplicationAppearance.property.pwaDescriptionInput">pwaDescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationAppearance.ApplicationAppearance.property.pwaNameInput">pwaNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationAppearance.ApplicationAppearance.property.pwaShortNameInput">pwaShortNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationAppearance.ApplicationAppearance.property.titleInput">titleInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationAppearance.ApplicationAppearance.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationAppearance.ApplicationAppearance.property.emailHeaderAndFooterEnabled">emailHeaderAndFooterEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationAppearance.ApplicationAppearance.property.footerMessage">footerMessage</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationAppearance.ApplicationAppearance.property.headerMessage">headerMessage</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationAppearance.ApplicationAppearance.property.keepSettingsOnDestroy">keepSettingsOnDestroy</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationAppearance.ApplicationAppearance.property.memberGuidelines">memberGuidelines</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationAppearance.ApplicationAppearance.property.messageBackgroundColor">messageBackgroundColor</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationAppearance.ApplicationAppearance.property.messageFontColor">messageFontColor</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationAppearance.ApplicationAppearance.property.newProjectGuidelines">newProjectGuidelines</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationAppearance.ApplicationAppearance.property.profileImageGuidelines">profileImageGuidelines</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationAppearance.ApplicationAppearance.property.pwaDescription">pwaDescription</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationAppearance.ApplicationAppearance.property.pwaName">pwaName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationAppearance.ApplicationAppearance.property.pwaShortName">pwaShortName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationAppearance.ApplicationAppearance.property.title">title</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-gitlab.applicationAppearance.ApplicationAppearance.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-gitlab.applicationAppearance.ApplicationAppearance.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-gitlab.applicationAppearance.ApplicationAppearance.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-gitlab.applicationAppearance.ApplicationAppearance.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-gitlab.applicationAppearance.ApplicationAppearance.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-gitlab.applicationAppearance.ApplicationAppearance.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-gitlab.applicationAppearance.ApplicationAppearance.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-gitlab.applicationAppearance.ApplicationAppearance.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-gitlab.applicationAppearance.ApplicationAppearance.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-gitlab.applicationAppearance.ApplicationAppearance.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-gitlab.applicationAppearance.ApplicationAppearance.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-gitlab.applicationAppearance.ApplicationAppearance.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-gitlab.applicationAppearance.ApplicationAppearance.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-gitlab.applicationAppearance.ApplicationAppearance.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-gitlab.applicationAppearance.ApplicationAppearance.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-gitlab.applicationAppearance.ApplicationAppearance.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `emailHeaderAndFooterEnabledInput`<sup>Optional</sup> <a name="emailHeaderAndFooterEnabledInput" id="@cdktf/provider-gitlab.applicationAppearance.ApplicationAppearance.property.emailHeaderAndFooterEnabledInput"></a>

```typescript
public readonly emailHeaderAndFooterEnabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `footerMessageInput`<sup>Optional</sup> <a name="footerMessageInput" id="@cdktf/provider-gitlab.applicationAppearance.ApplicationAppearance.property.footerMessageInput"></a>

```typescript
public readonly footerMessageInput: string;
```

- *Type:* string

---

##### `headerMessageInput`<sup>Optional</sup> <a name="headerMessageInput" id="@cdktf/provider-gitlab.applicationAppearance.ApplicationAppearance.property.headerMessageInput"></a>

```typescript
public readonly headerMessageInput: string;
```

- *Type:* string

---

##### `keepSettingsOnDestroyInput`<sup>Optional</sup> <a name="keepSettingsOnDestroyInput" id="@cdktf/provider-gitlab.applicationAppearance.ApplicationAppearance.property.keepSettingsOnDestroyInput"></a>

```typescript
public readonly keepSettingsOnDestroyInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `memberGuidelinesInput`<sup>Optional</sup> <a name="memberGuidelinesInput" id="@cdktf/provider-gitlab.applicationAppearance.ApplicationAppearance.property.memberGuidelinesInput"></a>

```typescript
public readonly memberGuidelinesInput: string;
```

- *Type:* string

---

##### `messageBackgroundColorInput`<sup>Optional</sup> <a name="messageBackgroundColorInput" id="@cdktf/provider-gitlab.applicationAppearance.ApplicationAppearance.property.messageBackgroundColorInput"></a>

```typescript
public readonly messageBackgroundColorInput: string;
```

- *Type:* string

---

##### `messageFontColorInput`<sup>Optional</sup> <a name="messageFontColorInput" id="@cdktf/provider-gitlab.applicationAppearance.ApplicationAppearance.property.messageFontColorInput"></a>

```typescript
public readonly messageFontColorInput: string;
```

- *Type:* string

---

##### `newProjectGuidelinesInput`<sup>Optional</sup> <a name="newProjectGuidelinesInput" id="@cdktf/provider-gitlab.applicationAppearance.ApplicationAppearance.property.newProjectGuidelinesInput"></a>

```typescript
public readonly newProjectGuidelinesInput: string;
```

- *Type:* string

---

##### `profileImageGuidelinesInput`<sup>Optional</sup> <a name="profileImageGuidelinesInput" id="@cdktf/provider-gitlab.applicationAppearance.ApplicationAppearance.property.profileImageGuidelinesInput"></a>

```typescript
public readonly profileImageGuidelinesInput: string;
```

- *Type:* string

---

##### `pwaDescriptionInput`<sup>Optional</sup> <a name="pwaDescriptionInput" id="@cdktf/provider-gitlab.applicationAppearance.ApplicationAppearance.property.pwaDescriptionInput"></a>

```typescript
public readonly pwaDescriptionInput: string;
```

- *Type:* string

---

##### `pwaNameInput`<sup>Optional</sup> <a name="pwaNameInput" id="@cdktf/provider-gitlab.applicationAppearance.ApplicationAppearance.property.pwaNameInput"></a>

```typescript
public readonly pwaNameInput: string;
```

- *Type:* string

---

##### `pwaShortNameInput`<sup>Optional</sup> <a name="pwaShortNameInput" id="@cdktf/provider-gitlab.applicationAppearance.ApplicationAppearance.property.pwaShortNameInput"></a>

```typescript
public readonly pwaShortNameInput: string;
```

- *Type:* string

---

##### `titleInput`<sup>Optional</sup> <a name="titleInput" id="@cdktf/provider-gitlab.applicationAppearance.ApplicationAppearance.property.titleInput"></a>

```typescript
public readonly titleInput: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-gitlab.applicationAppearance.ApplicationAppearance.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `emailHeaderAndFooterEnabled`<sup>Required</sup> <a name="emailHeaderAndFooterEnabled" id="@cdktf/provider-gitlab.applicationAppearance.ApplicationAppearance.property.emailHeaderAndFooterEnabled"></a>

```typescript
public readonly emailHeaderAndFooterEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `footerMessage`<sup>Required</sup> <a name="footerMessage" id="@cdktf/provider-gitlab.applicationAppearance.ApplicationAppearance.property.footerMessage"></a>

```typescript
public readonly footerMessage: string;
```

- *Type:* string

---

##### `headerMessage`<sup>Required</sup> <a name="headerMessage" id="@cdktf/provider-gitlab.applicationAppearance.ApplicationAppearance.property.headerMessage"></a>

```typescript
public readonly headerMessage: string;
```

- *Type:* string

---

##### `keepSettingsOnDestroy`<sup>Required</sup> <a name="keepSettingsOnDestroy" id="@cdktf/provider-gitlab.applicationAppearance.ApplicationAppearance.property.keepSettingsOnDestroy"></a>

```typescript
public readonly keepSettingsOnDestroy: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `memberGuidelines`<sup>Required</sup> <a name="memberGuidelines" id="@cdktf/provider-gitlab.applicationAppearance.ApplicationAppearance.property.memberGuidelines"></a>

```typescript
public readonly memberGuidelines: string;
```

- *Type:* string

---

##### `messageBackgroundColor`<sup>Required</sup> <a name="messageBackgroundColor" id="@cdktf/provider-gitlab.applicationAppearance.ApplicationAppearance.property.messageBackgroundColor"></a>

```typescript
public readonly messageBackgroundColor: string;
```

- *Type:* string

---

##### `messageFontColor`<sup>Required</sup> <a name="messageFontColor" id="@cdktf/provider-gitlab.applicationAppearance.ApplicationAppearance.property.messageFontColor"></a>

```typescript
public readonly messageFontColor: string;
```

- *Type:* string

---

##### `newProjectGuidelines`<sup>Required</sup> <a name="newProjectGuidelines" id="@cdktf/provider-gitlab.applicationAppearance.ApplicationAppearance.property.newProjectGuidelines"></a>

```typescript
public readonly newProjectGuidelines: string;
```

- *Type:* string

---

##### `profileImageGuidelines`<sup>Required</sup> <a name="profileImageGuidelines" id="@cdktf/provider-gitlab.applicationAppearance.ApplicationAppearance.property.profileImageGuidelines"></a>

```typescript
public readonly profileImageGuidelines: string;
```

- *Type:* string

---

##### `pwaDescription`<sup>Required</sup> <a name="pwaDescription" id="@cdktf/provider-gitlab.applicationAppearance.ApplicationAppearance.property.pwaDescription"></a>

```typescript
public readonly pwaDescription: string;
```

- *Type:* string

---

##### `pwaName`<sup>Required</sup> <a name="pwaName" id="@cdktf/provider-gitlab.applicationAppearance.ApplicationAppearance.property.pwaName"></a>

```typescript
public readonly pwaName: string;
```

- *Type:* string

---

##### `pwaShortName`<sup>Required</sup> <a name="pwaShortName" id="@cdktf/provider-gitlab.applicationAppearance.ApplicationAppearance.property.pwaShortName"></a>

```typescript
public readonly pwaShortName: string;
```

- *Type:* string

---

##### `title`<sup>Required</sup> <a name="title" id="@cdktf/provider-gitlab.applicationAppearance.ApplicationAppearance.property.title"></a>

```typescript
public readonly title: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.applicationAppearance.ApplicationAppearance.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-gitlab.applicationAppearance.ApplicationAppearance.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### ApplicationAppearanceConfig <a name="ApplicationAppearanceConfig" id="@cdktf/provider-gitlab.applicationAppearance.ApplicationAppearanceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-gitlab.applicationAppearance.ApplicationAppearanceConfig.Initializer"></a>

```typescript
import { applicationAppearance } from '@cdktf/provider-gitlab'

const applicationAppearanceConfig: applicationAppearance.ApplicationAppearanceConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.applicationAppearance.ApplicationAppearanceConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationAppearance.ApplicationAppearanceConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationAppearance.ApplicationAppearanceConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationAppearance.ApplicationAppearanceConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationAppearance.ApplicationAppearanceConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationAppearance.ApplicationAppearanceConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationAppearance.ApplicationAppearanceConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationAppearance.ApplicationAppearanceConfig.property.description">description</a></code> | <code>string</code> | Markdown text shown on the sign-in and sign-up page. |
| <code><a href="#@cdktf/provider-gitlab.applicationAppearance.ApplicationAppearanceConfig.property.emailHeaderAndFooterEnabled">emailHeaderAndFooterEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Add header and footer to all outgoing emails if enabled. |
| <code><a href="#@cdktf/provider-gitlab.applicationAppearance.ApplicationAppearanceConfig.property.footerMessage">footerMessage</a></code> | <code>string</code> | Message in the system footer bar. |
| <code><a href="#@cdktf/provider-gitlab.applicationAppearance.ApplicationAppearanceConfig.property.headerMessage">headerMessage</a></code> | <code>string</code> | Message in the system header bar. |
| <code><a href="#@cdktf/provider-gitlab.applicationAppearance.ApplicationAppearanceConfig.property.keepSettingsOnDestroy">keepSettingsOnDestroy</a></code> | <code>boolean \| cdktf.IResolvable</code> | Set to true if the appearance settings should not be reset to their pre-terraform defaults on destroy. |
| <code><a href="#@cdktf/provider-gitlab.applicationAppearance.ApplicationAppearanceConfig.property.memberGuidelines">memberGuidelines</a></code> | <code>string</code> | Markdown text shown on the group or project member page for users with permission to change members. |
| <code><a href="#@cdktf/provider-gitlab.applicationAppearance.ApplicationAppearanceConfig.property.messageBackgroundColor">messageBackgroundColor</a></code> | <code>string</code> | Background color for the system header or footer bar, in CSS hex notation. |
| <code><a href="#@cdktf/provider-gitlab.applicationAppearance.ApplicationAppearanceConfig.property.messageFontColor">messageFontColor</a></code> | <code>string</code> | Font color for the system header or footer bar, in CSS hex notation. |
| <code><a href="#@cdktf/provider-gitlab.applicationAppearance.ApplicationAppearanceConfig.property.newProjectGuidelines">newProjectGuidelines</a></code> | <code>string</code> | Markdown text shown on the new project page. |
| <code><a href="#@cdktf/provider-gitlab.applicationAppearance.ApplicationAppearanceConfig.property.profileImageGuidelines">profileImageGuidelines</a></code> | <code>string</code> | Markdown text shown on the profile page below the Public Avatar. |
| <code><a href="#@cdktf/provider-gitlab.applicationAppearance.ApplicationAppearanceConfig.property.pwaDescription">pwaDescription</a></code> | <code>string</code> | An explanation of what the Progressive Web App does. Used for the attribute `description` in `manifest.json`. |
| <code><a href="#@cdktf/provider-gitlab.applicationAppearance.ApplicationAppearanceConfig.property.pwaName">pwaName</a></code> | <code>string</code> | Full name of the Progressive Web App. Used for the attribute `name` in `manifest.json`. |
| <code><a href="#@cdktf/provider-gitlab.applicationAppearance.ApplicationAppearanceConfig.property.pwaShortName">pwaShortName</a></code> | <code>string</code> | Short name for Progressive Web App. |
| <code><a href="#@cdktf/provider-gitlab.applicationAppearance.ApplicationAppearanceConfig.property.title">title</a></code> | <code>string</code> | Application title on the sign-in and sign-up page. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-gitlab.applicationAppearance.ApplicationAppearanceConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-gitlab.applicationAppearance.ApplicationAppearanceConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-gitlab.applicationAppearance.ApplicationAppearanceConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-gitlab.applicationAppearance.ApplicationAppearanceConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-gitlab.applicationAppearance.ApplicationAppearanceConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-gitlab.applicationAppearance.ApplicationAppearanceConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-gitlab.applicationAppearance.ApplicationAppearanceConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-gitlab.applicationAppearance.ApplicationAppearanceConfig.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

Markdown text shown on the sign-in and sign-up page.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.4.0/docs/resources/application_appearance#description ApplicationAppearance#description}

---

##### `emailHeaderAndFooterEnabled`<sup>Optional</sup> <a name="emailHeaderAndFooterEnabled" id="@cdktf/provider-gitlab.applicationAppearance.ApplicationAppearanceConfig.property.emailHeaderAndFooterEnabled"></a>

```typescript
public readonly emailHeaderAndFooterEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Add header and footer to all outgoing emails if enabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.4.0/docs/resources/application_appearance#email_header_and_footer_enabled ApplicationAppearance#email_header_and_footer_enabled}

---

##### `footerMessage`<sup>Optional</sup> <a name="footerMessage" id="@cdktf/provider-gitlab.applicationAppearance.ApplicationAppearanceConfig.property.footerMessage"></a>

```typescript
public readonly footerMessage: string;
```

- *Type:* string

Message in the system footer bar.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.4.0/docs/resources/application_appearance#footer_message ApplicationAppearance#footer_message}

---

##### `headerMessage`<sup>Optional</sup> <a name="headerMessage" id="@cdktf/provider-gitlab.applicationAppearance.ApplicationAppearanceConfig.property.headerMessage"></a>

```typescript
public readonly headerMessage: string;
```

- *Type:* string

Message in the system header bar.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.4.0/docs/resources/application_appearance#header_message ApplicationAppearance#header_message}

---

##### `keepSettingsOnDestroy`<sup>Optional</sup> <a name="keepSettingsOnDestroy" id="@cdktf/provider-gitlab.applicationAppearance.ApplicationAppearanceConfig.property.keepSettingsOnDestroy"></a>

```typescript
public readonly keepSettingsOnDestroy: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Set to true if the appearance settings should not be reset to their pre-terraform defaults on destroy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.4.0/docs/resources/application_appearance#keep_settings_on_destroy ApplicationAppearance#keep_settings_on_destroy}

---

##### `memberGuidelines`<sup>Optional</sup> <a name="memberGuidelines" id="@cdktf/provider-gitlab.applicationAppearance.ApplicationAppearanceConfig.property.memberGuidelines"></a>

```typescript
public readonly memberGuidelines: string;
```

- *Type:* string

Markdown text shown on the group or project member page for users with permission to change members.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.4.0/docs/resources/application_appearance#member_guidelines ApplicationAppearance#member_guidelines}

---

##### `messageBackgroundColor`<sup>Optional</sup> <a name="messageBackgroundColor" id="@cdktf/provider-gitlab.applicationAppearance.ApplicationAppearanceConfig.property.messageBackgroundColor"></a>

```typescript
public readonly messageBackgroundColor: string;
```

- *Type:* string

Background color for the system header or footer bar, in CSS hex notation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.4.0/docs/resources/application_appearance#message_background_color ApplicationAppearance#message_background_color}

---

##### `messageFontColor`<sup>Optional</sup> <a name="messageFontColor" id="@cdktf/provider-gitlab.applicationAppearance.ApplicationAppearanceConfig.property.messageFontColor"></a>

```typescript
public readonly messageFontColor: string;
```

- *Type:* string

Font color for the system header or footer bar, in CSS hex notation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.4.0/docs/resources/application_appearance#message_font_color ApplicationAppearance#message_font_color}

---

##### `newProjectGuidelines`<sup>Optional</sup> <a name="newProjectGuidelines" id="@cdktf/provider-gitlab.applicationAppearance.ApplicationAppearanceConfig.property.newProjectGuidelines"></a>

```typescript
public readonly newProjectGuidelines: string;
```

- *Type:* string

Markdown text shown on the new project page.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.4.0/docs/resources/application_appearance#new_project_guidelines ApplicationAppearance#new_project_guidelines}

---

##### `profileImageGuidelines`<sup>Optional</sup> <a name="profileImageGuidelines" id="@cdktf/provider-gitlab.applicationAppearance.ApplicationAppearanceConfig.property.profileImageGuidelines"></a>

```typescript
public readonly profileImageGuidelines: string;
```

- *Type:* string

Markdown text shown on the profile page below the Public Avatar.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.4.0/docs/resources/application_appearance#profile_image_guidelines ApplicationAppearance#profile_image_guidelines}

---

##### `pwaDescription`<sup>Optional</sup> <a name="pwaDescription" id="@cdktf/provider-gitlab.applicationAppearance.ApplicationAppearanceConfig.property.pwaDescription"></a>

```typescript
public readonly pwaDescription: string;
```

- *Type:* string

An explanation of what the Progressive Web App does. Used for the attribute `description` in `manifest.json`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.4.0/docs/resources/application_appearance#pwa_description ApplicationAppearance#pwa_description}

---

##### `pwaName`<sup>Optional</sup> <a name="pwaName" id="@cdktf/provider-gitlab.applicationAppearance.ApplicationAppearanceConfig.property.pwaName"></a>

```typescript
public readonly pwaName: string;
```

- *Type:* string

Full name of the Progressive Web App. Used for the attribute `name` in `manifest.json`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.4.0/docs/resources/application_appearance#pwa_name ApplicationAppearance#pwa_name}

---

##### `pwaShortName`<sup>Optional</sup> <a name="pwaShortName" id="@cdktf/provider-gitlab.applicationAppearance.ApplicationAppearanceConfig.property.pwaShortName"></a>

```typescript
public readonly pwaShortName: string;
```

- *Type:* string

Short name for Progressive Web App.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.4.0/docs/resources/application_appearance#pwa_short_name ApplicationAppearance#pwa_short_name}

---

##### `title`<sup>Optional</sup> <a name="title" id="@cdktf/provider-gitlab.applicationAppearance.ApplicationAppearanceConfig.property.title"></a>

```typescript
public readonly title: string;
```

- *Type:* string

Application title on the sign-in and sign-up page.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.4.0/docs/resources/application_appearance#title ApplicationAppearance#title}

---



