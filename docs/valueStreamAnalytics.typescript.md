# `valueStreamAnalytics` Submodule <a name="`valueStreamAnalytics` Submodule" id="@cdktf/provider-gitlab.valueStreamAnalytics"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ValueStreamAnalytics <a name="ValueStreamAnalytics" id="@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalytics"></a>

Represents a {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.9.0/docs/resources/value_stream_analytics gitlab_value_stream_analytics}.

#### Initializers <a name="Initializers" id="@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalytics.Initializer"></a>

```typescript
import { valueStreamAnalytics } from '@cdktf/provider-gitlab'

new valueStreamAnalytics.ValueStreamAnalytics(scope: Construct, id: string, config: ValueStreamAnalyticsConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalytics.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalytics.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalytics.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalyticsConfig">ValueStreamAnalyticsConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalytics.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalytics.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalytics.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalyticsConfig">ValueStreamAnalyticsConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalytics.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalytics.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalytics.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalytics.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalytics.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalytics.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalytics.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalytics.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalytics.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalytics.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalytics.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalytics.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalytics.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalytics.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalytics.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalytics.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalytics.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalytics.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalytics.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalytics.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalytics.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalytics.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalytics.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalytics.putStages">putStages</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalytics.resetGroupFullPath">resetGroupFullPath</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalytics.resetProjectFullPath">resetProjectFullPath</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalytics.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalytics.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalytics.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalytics.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalytics.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalytics.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalytics.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalytics.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalytics.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalytics.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalytics.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalytics.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalytics.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalytics.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalytics.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalytics.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalytics.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalytics.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalytics.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalytics.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalytics.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalytics.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalytics.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalytics.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalytics.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalytics.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalytics.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalytics.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalytics.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalytics.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalytics.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalytics.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalytics.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalytics.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalytics.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalytics.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalytics.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalytics.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalytics.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalytics.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalytics.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalytics.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalytics.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putStages` <a name="putStages" id="@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalytics.putStages"></a>

```typescript
public putStages(value: IResolvable | ValueStreamAnalyticsStages[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalytics.putStages.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalyticsStages">ValueStreamAnalyticsStages</a>[]

---

##### `resetGroupFullPath` <a name="resetGroupFullPath" id="@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalytics.resetGroupFullPath"></a>

```typescript
public resetGroupFullPath(): void
```

##### `resetProjectFullPath` <a name="resetProjectFullPath" id="@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalytics.resetProjectFullPath"></a>

```typescript
public resetProjectFullPath(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalytics.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalytics.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalytics.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalytics.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a ValueStreamAnalytics resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalytics.isConstruct"></a>

```typescript
import { valueStreamAnalytics } from '@cdktf/provider-gitlab'

valueStreamAnalytics.ValueStreamAnalytics.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalytics.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalytics.isTerraformElement"></a>

```typescript
import { valueStreamAnalytics } from '@cdktf/provider-gitlab'

valueStreamAnalytics.ValueStreamAnalytics.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalytics.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalytics.isTerraformResource"></a>

```typescript
import { valueStreamAnalytics } from '@cdktf/provider-gitlab'

valueStreamAnalytics.ValueStreamAnalytics.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalytics.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalytics.generateConfigForImport"></a>

```typescript
import { valueStreamAnalytics } from '@cdktf/provider-gitlab'

valueStreamAnalytics.ValueStreamAnalytics.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a ValueStreamAnalytics resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalytics.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalytics.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the ValueStreamAnalytics to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalytics.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing ValueStreamAnalytics that should be imported.

Refer to the {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.9.0/docs/resources/value_stream_analytics#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalytics.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the ValueStreamAnalytics to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalytics.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalytics.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalytics.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalytics.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalytics.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalytics.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalytics.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalytics.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalytics.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalytics.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalytics.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalytics.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalytics.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalytics.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalytics.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalytics.property.stages">stages</a></code> | <code><a href="#@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalyticsStagesList">ValueStreamAnalyticsStagesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalytics.property.groupFullPathInput">groupFullPathInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalytics.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalytics.property.projectFullPathInput">projectFullPathInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalytics.property.stagesInput">stagesInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalyticsStages">ValueStreamAnalyticsStages</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalytics.property.groupFullPath">groupFullPath</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalytics.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalytics.property.projectFullPath">projectFullPath</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalytics.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalytics.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalytics.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalytics.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalytics.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalytics.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalytics.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalytics.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalytics.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalytics.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalytics.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalytics.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalytics.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalytics.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalytics.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `stages`<sup>Required</sup> <a name="stages" id="@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalytics.property.stages"></a>

```typescript
public readonly stages: ValueStreamAnalyticsStagesList;
```

- *Type:* <a href="#@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalyticsStagesList">ValueStreamAnalyticsStagesList</a>

---

##### `groupFullPathInput`<sup>Optional</sup> <a name="groupFullPathInput" id="@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalytics.property.groupFullPathInput"></a>

```typescript
public readonly groupFullPathInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalytics.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `projectFullPathInput`<sup>Optional</sup> <a name="projectFullPathInput" id="@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalytics.property.projectFullPathInput"></a>

```typescript
public readonly projectFullPathInput: string;
```

- *Type:* string

---

##### `stagesInput`<sup>Optional</sup> <a name="stagesInput" id="@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalytics.property.stagesInput"></a>

```typescript
public readonly stagesInput: IResolvable | ValueStreamAnalyticsStages[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalyticsStages">ValueStreamAnalyticsStages</a>[]

---

##### `groupFullPath`<sup>Required</sup> <a name="groupFullPath" id="@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalytics.property.groupFullPath"></a>

```typescript
public readonly groupFullPath: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalytics.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `projectFullPath`<sup>Required</sup> <a name="projectFullPath" id="@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalytics.property.projectFullPath"></a>

```typescript
public readonly projectFullPath: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalytics.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalytics.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### ValueStreamAnalyticsConfig <a name="ValueStreamAnalyticsConfig" id="@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalyticsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalyticsConfig.Initializer"></a>

```typescript
import { valueStreamAnalytics } from '@cdktf/provider-gitlab'

const valueStreamAnalyticsConfig: valueStreamAnalytics.ValueStreamAnalyticsConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalyticsConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalyticsConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalyticsConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalyticsConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalyticsConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalyticsConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalyticsConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalyticsConfig.property.name">name</a></code> | <code>string</code> | The name of the value stream. |
| <code><a href="#@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalyticsConfig.property.stages">stages</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalyticsStages">ValueStreamAnalyticsStages</a>[]</code> | Stages of the value stream. |
| <code><a href="#@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalyticsConfig.property.groupFullPath">groupFullPath</a></code> | <code>string</code> | Full path of the group the value stream is created in. **One of `group_full_path` OR `project_full_path` is required.**. |
| <code><a href="#@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalyticsConfig.property.projectFullPath">projectFullPath</a></code> | <code>string</code> | Full path of the project the value stream is created in. **One of `group_full_path` OR `project_full_path` is required.**. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalyticsConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalyticsConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalyticsConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalyticsConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalyticsConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalyticsConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalyticsConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalyticsConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

The name of the value stream.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.9.0/docs/resources/value_stream_analytics#name ValueStreamAnalytics#name}

---

##### `stages`<sup>Required</sup> <a name="stages" id="@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalyticsConfig.property.stages"></a>

```typescript
public readonly stages: IResolvable | ValueStreamAnalyticsStages[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalyticsStages">ValueStreamAnalyticsStages</a>[]

Stages of the value stream.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.9.0/docs/resources/value_stream_analytics#stages ValueStreamAnalytics#stages}

---

##### `groupFullPath`<sup>Optional</sup> <a name="groupFullPath" id="@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalyticsConfig.property.groupFullPath"></a>

```typescript
public readonly groupFullPath: string;
```

- *Type:* string

Full path of the group the value stream is created in. **One of `group_full_path` OR `project_full_path` is required.**.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.9.0/docs/resources/value_stream_analytics#group_full_path ValueStreamAnalytics#group_full_path}

---

##### `projectFullPath`<sup>Optional</sup> <a name="projectFullPath" id="@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalyticsConfig.property.projectFullPath"></a>

```typescript
public readonly projectFullPath: string;
```

- *Type:* string

Full path of the project the value stream is created in. **One of `group_full_path` OR `project_full_path` is required.**.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.9.0/docs/resources/value_stream_analytics#project_full_path ValueStreamAnalytics#project_full_path}

---

### ValueStreamAnalyticsStages <a name="ValueStreamAnalyticsStages" id="@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalyticsStages"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalyticsStages.Initializer"></a>

```typescript
import { valueStreamAnalytics } from '@cdktf/provider-gitlab'

const valueStreamAnalyticsStages: valueStreamAnalytics.ValueStreamAnalyticsStages = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalyticsStages.property.name">name</a></code> | <code>string</code> | The name of the value stream stage. |
| <code><a href="#@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalyticsStages.property.custom">custom</a></code> | <code>boolean \| cdktf.IResolvable</code> | Boolean whether the stage is customized. If false, it assigns a built-in default stage by name. |
| <code><a href="#@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalyticsStages.property.endEventIdentifier">endEventIdentifier</a></code> | <code>string</code> | End event identifier. |
| <code><a href="#@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalyticsStages.property.endEventLabelId">endEventLabelId</a></code> | <code>string</code> | Label ID associated with the end event identifier. In the format of `gid://gitlab/GroupLabel/<id>` or `gid://gitlab/ProjectLabel/<id>`. |
| <code><a href="#@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalyticsStages.property.hidden">hidden</a></code> | <code>boolean \| cdktf.IResolvable</code> | Boolean whether the stage is hidden, GitLab provided default stages are hidden by default. |
| <code><a href="#@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalyticsStages.property.startEventIdentifier">startEventIdentifier</a></code> | <code>string</code> | Start event identifier. |
| <code><a href="#@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalyticsStages.property.startEventLabelId">startEventLabelId</a></code> | <code>string</code> | Label ID associated with the start event identifier. In the format of `gid://gitlab/GroupLabel/<id>` or `gid://gitlab/ProjectLabel/<id>`. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalyticsStages.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

The name of the value stream stage.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.9.0/docs/resources/value_stream_analytics#name ValueStreamAnalytics#name}

---

##### `custom`<sup>Optional</sup> <a name="custom" id="@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalyticsStages.property.custom"></a>

```typescript
public readonly custom: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Boolean whether the stage is customized. If false, it assigns a built-in default stage by name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.9.0/docs/resources/value_stream_analytics#custom ValueStreamAnalytics#custom}

---

##### `endEventIdentifier`<sup>Optional</sup> <a name="endEventIdentifier" id="@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalyticsStages.property.endEventIdentifier"></a>

```typescript
public readonly endEventIdentifier: string;
```

- *Type:* string

End event identifier.

Valid values are: `CODE_STAGE_START`, `ISSUE_CLOSED`, `ISSUE_CREATED`, `ISSUE_DEPLOYED_TO_PRODUCTION`, `ISSUE_FIRST_ADDED_TO_BOARD`, `ISSUE_FIRST_ADDED_TO_ITERATION`, `ISSUE_FIRST_ASSIGNED_AT`, `ISSUE_FIRST_ASSOCIATED_WITH_MILESTONE`, `ISSUE_FIRST_MENTIONED_IN_COMMIT`, `ISSUE_LABEL_ADDED`, `ISSUE_LABEL_REMOVED`, `ISSUE_LAST_EDITED`, `ISSUE_STAGE_END`, `MERGE_REQUEST_CLOSED`, `MERGE_REQUEST_CREATED`, `MERGE_REQUEST_FIRST_ASSIGNED_AT`, `MERGE_REQUEST_FIRST_COMMIT_AT`, `MERGE_REQUEST_FIRST_DEPLOYED_TO_PRODUCTION`, `MERGE_REQUEST_LABEL_ADDED`, `MERGE_REQUEST_LABEL_REMOVED`, `MERGE_REQUEST_LAST_BUILD_FINISHED`, `MERGE_REQUEST_LAST_BUILD_STARTED`, `MERGE_REQUEST_LAST_EDITED`, `MERGE_REQUEST_MERGED`, `MERGE_REQUEST_REVIEWER_FIRST_ASSIGNED`, `MERGE_REQUEST_PLAN_STAGE_START`

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.9.0/docs/resources/value_stream_analytics#end_event_identifier ValueStreamAnalytics#end_event_identifier}

---

##### `endEventLabelId`<sup>Optional</sup> <a name="endEventLabelId" id="@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalyticsStages.property.endEventLabelId"></a>

```typescript
public readonly endEventLabelId: string;
```

- *Type:* string

Label ID associated with the end event identifier. In the format of `gid://gitlab/GroupLabel/<id>` or `gid://gitlab/ProjectLabel/<id>`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.9.0/docs/resources/value_stream_analytics#end_event_label_id ValueStreamAnalytics#end_event_label_id}

---

##### `hidden`<sup>Optional</sup> <a name="hidden" id="@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalyticsStages.property.hidden"></a>

```typescript
public readonly hidden: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Boolean whether the stage is hidden, GitLab provided default stages are hidden by default.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.9.0/docs/resources/value_stream_analytics#hidden ValueStreamAnalytics#hidden}

---

##### `startEventIdentifier`<sup>Optional</sup> <a name="startEventIdentifier" id="@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalyticsStages.property.startEventIdentifier"></a>

```typescript
public readonly startEventIdentifier: string;
```

- *Type:* string

Start event identifier.

Valid values are: `CODE_STAGE_START`, `ISSUE_CLOSED`, `ISSUE_CREATED`, `ISSUE_DEPLOYED_TO_PRODUCTION`, `ISSUE_FIRST_ADDED_TO_BOARD`, `ISSUE_FIRST_ADDED_TO_ITERATION`, `ISSUE_FIRST_ASSIGNED_AT`, `ISSUE_FIRST_ASSOCIATED_WITH_MILESTONE`, `ISSUE_FIRST_MENTIONED_IN_COMMIT`, `ISSUE_LABEL_ADDED`, `ISSUE_LABEL_REMOVED`, `ISSUE_LAST_EDITED`, `ISSUE_STAGE_END`, `MERGE_REQUEST_CLOSED`, `MERGE_REQUEST_CREATED`, `MERGE_REQUEST_FIRST_ASSIGNED_AT`, `MERGE_REQUEST_FIRST_COMMIT_AT`, `MERGE_REQUEST_FIRST_DEPLOYED_TO_PRODUCTION`, `MERGE_REQUEST_LABEL_ADDED`, `MERGE_REQUEST_LABEL_REMOVED`, `MERGE_REQUEST_LAST_BUILD_FINISHED`, `MERGE_REQUEST_LAST_BUILD_STARTED`, `MERGE_REQUEST_LAST_EDITED`, `MERGE_REQUEST_MERGED`, `MERGE_REQUEST_REVIEWER_FIRST_ASSIGNED`, `MERGE_REQUEST_PLAN_STAGE_START`

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.9.0/docs/resources/value_stream_analytics#start_event_identifier ValueStreamAnalytics#start_event_identifier}

---

##### `startEventLabelId`<sup>Optional</sup> <a name="startEventLabelId" id="@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalyticsStages.property.startEventLabelId"></a>

```typescript
public readonly startEventLabelId: string;
```

- *Type:* string

Label ID associated with the start event identifier. In the format of `gid://gitlab/GroupLabel/<id>` or `gid://gitlab/ProjectLabel/<id>`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.9.0/docs/resources/value_stream_analytics#start_event_label_id ValueStreamAnalytics#start_event_label_id}

---

## Classes <a name="Classes" id="Classes"></a>

### ValueStreamAnalyticsStagesList <a name="ValueStreamAnalyticsStagesList" id="@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalyticsStagesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalyticsStagesList.Initializer"></a>

```typescript
import { valueStreamAnalytics } from '@cdktf/provider-gitlab'

new valueStreamAnalytics.ValueStreamAnalyticsStagesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalyticsStagesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalyticsStagesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalyticsStagesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalyticsStagesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalyticsStagesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalyticsStagesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalyticsStagesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalyticsStagesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalyticsStagesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalyticsStagesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalyticsStagesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalyticsStagesList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalyticsStagesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalyticsStagesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalyticsStagesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalyticsStagesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalyticsStagesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalyticsStagesList.get"></a>

```typescript
public get(index: number): ValueStreamAnalyticsStagesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalyticsStagesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalyticsStagesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalyticsStagesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalyticsStagesList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalyticsStages">ValueStreamAnalyticsStages</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalyticsStagesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalyticsStagesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalyticsStagesList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ValueStreamAnalyticsStages[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalyticsStages">ValueStreamAnalyticsStages</a>[]

---


### ValueStreamAnalyticsStagesOutputReference <a name="ValueStreamAnalyticsStagesOutputReference" id="@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalyticsStagesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalyticsStagesOutputReference.Initializer"></a>

```typescript
import { valueStreamAnalytics } from '@cdktf/provider-gitlab'

new valueStreamAnalytics.ValueStreamAnalyticsStagesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalyticsStagesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalyticsStagesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalyticsStagesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalyticsStagesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalyticsStagesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalyticsStagesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalyticsStagesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalyticsStagesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalyticsStagesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalyticsStagesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalyticsStagesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalyticsStagesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalyticsStagesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalyticsStagesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalyticsStagesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalyticsStagesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalyticsStagesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalyticsStagesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalyticsStagesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalyticsStagesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalyticsStagesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalyticsStagesOutputReference.resetCustom">resetCustom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalyticsStagesOutputReference.resetEndEventIdentifier">resetEndEventIdentifier</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalyticsStagesOutputReference.resetEndEventLabelId">resetEndEventLabelId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalyticsStagesOutputReference.resetHidden">resetHidden</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalyticsStagesOutputReference.resetStartEventIdentifier">resetStartEventIdentifier</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalyticsStagesOutputReference.resetStartEventLabelId">resetStartEventLabelId</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalyticsStagesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalyticsStagesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalyticsStagesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalyticsStagesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalyticsStagesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalyticsStagesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalyticsStagesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalyticsStagesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalyticsStagesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalyticsStagesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalyticsStagesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalyticsStagesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalyticsStagesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalyticsStagesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalyticsStagesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalyticsStagesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalyticsStagesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalyticsStagesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalyticsStagesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalyticsStagesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalyticsStagesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalyticsStagesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalyticsStagesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalyticsStagesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCustom` <a name="resetCustom" id="@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalyticsStagesOutputReference.resetCustom"></a>

```typescript
public resetCustom(): void
```

##### `resetEndEventIdentifier` <a name="resetEndEventIdentifier" id="@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalyticsStagesOutputReference.resetEndEventIdentifier"></a>

```typescript
public resetEndEventIdentifier(): void
```

##### `resetEndEventLabelId` <a name="resetEndEventLabelId" id="@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalyticsStagesOutputReference.resetEndEventLabelId"></a>

```typescript
public resetEndEventLabelId(): void
```

##### `resetHidden` <a name="resetHidden" id="@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalyticsStagesOutputReference.resetHidden"></a>

```typescript
public resetHidden(): void
```

##### `resetStartEventIdentifier` <a name="resetStartEventIdentifier" id="@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalyticsStagesOutputReference.resetStartEventIdentifier"></a>

```typescript
public resetStartEventIdentifier(): void
```

##### `resetStartEventLabelId` <a name="resetStartEventLabelId" id="@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalyticsStagesOutputReference.resetStartEventLabelId"></a>

```typescript
public resetStartEventLabelId(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalyticsStagesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalyticsStagesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalyticsStagesOutputReference.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalyticsStagesOutputReference.property.customInput">customInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalyticsStagesOutputReference.property.endEventIdentifierInput">endEventIdentifierInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalyticsStagesOutputReference.property.endEventLabelIdInput">endEventLabelIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalyticsStagesOutputReference.property.hiddenInput">hiddenInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalyticsStagesOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalyticsStagesOutputReference.property.startEventIdentifierInput">startEventIdentifierInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalyticsStagesOutputReference.property.startEventLabelIdInput">startEventLabelIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalyticsStagesOutputReference.property.custom">custom</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalyticsStagesOutputReference.property.endEventIdentifier">endEventIdentifier</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalyticsStagesOutputReference.property.endEventLabelId">endEventLabelId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalyticsStagesOutputReference.property.hidden">hidden</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalyticsStagesOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalyticsStagesOutputReference.property.startEventIdentifier">startEventIdentifier</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalyticsStagesOutputReference.property.startEventLabelId">startEventLabelId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalyticsStagesOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalyticsStages">ValueStreamAnalyticsStages</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalyticsStagesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalyticsStagesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalyticsStagesOutputReference.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `customInput`<sup>Optional</sup> <a name="customInput" id="@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalyticsStagesOutputReference.property.customInput"></a>

```typescript
public readonly customInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `endEventIdentifierInput`<sup>Optional</sup> <a name="endEventIdentifierInput" id="@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalyticsStagesOutputReference.property.endEventIdentifierInput"></a>

```typescript
public readonly endEventIdentifierInput: string;
```

- *Type:* string

---

##### `endEventLabelIdInput`<sup>Optional</sup> <a name="endEventLabelIdInput" id="@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalyticsStagesOutputReference.property.endEventLabelIdInput"></a>

```typescript
public readonly endEventLabelIdInput: string;
```

- *Type:* string

---

##### `hiddenInput`<sup>Optional</sup> <a name="hiddenInput" id="@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalyticsStagesOutputReference.property.hiddenInput"></a>

```typescript
public readonly hiddenInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalyticsStagesOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `startEventIdentifierInput`<sup>Optional</sup> <a name="startEventIdentifierInput" id="@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalyticsStagesOutputReference.property.startEventIdentifierInput"></a>

```typescript
public readonly startEventIdentifierInput: string;
```

- *Type:* string

---

##### `startEventLabelIdInput`<sup>Optional</sup> <a name="startEventLabelIdInput" id="@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalyticsStagesOutputReference.property.startEventLabelIdInput"></a>

```typescript
public readonly startEventLabelIdInput: string;
```

- *Type:* string

---

##### `custom`<sup>Required</sup> <a name="custom" id="@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalyticsStagesOutputReference.property.custom"></a>

```typescript
public readonly custom: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `endEventIdentifier`<sup>Required</sup> <a name="endEventIdentifier" id="@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalyticsStagesOutputReference.property.endEventIdentifier"></a>

```typescript
public readonly endEventIdentifier: string;
```

- *Type:* string

---

##### `endEventLabelId`<sup>Required</sup> <a name="endEventLabelId" id="@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalyticsStagesOutputReference.property.endEventLabelId"></a>

```typescript
public readonly endEventLabelId: string;
```

- *Type:* string

---

##### `hidden`<sup>Required</sup> <a name="hidden" id="@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalyticsStagesOutputReference.property.hidden"></a>

```typescript
public readonly hidden: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalyticsStagesOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `startEventIdentifier`<sup>Required</sup> <a name="startEventIdentifier" id="@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalyticsStagesOutputReference.property.startEventIdentifier"></a>

```typescript
public readonly startEventIdentifier: string;
```

- *Type:* string

---

##### `startEventLabelId`<sup>Required</sup> <a name="startEventLabelId" id="@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalyticsStagesOutputReference.property.startEventLabelId"></a>

```typescript
public readonly startEventLabelId: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalyticsStagesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ValueStreamAnalyticsStages;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalyticsStages">ValueStreamAnalyticsStages</a>

---



