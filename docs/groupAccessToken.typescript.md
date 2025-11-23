# `groupAccessToken` Submodule <a name="`groupAccessToken` Submodule" id="@cdktf/provider-gitlab.groupAccessToken"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GroupAccessToken <a name="GroupAccessToken" id="@cdktf/provider-gitlab.groupAccessToken.GroupAccessToken"></a>

Represents a {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.6.1/docs/resources/group_access_token gitlab_group_access_token}.

#### Initializers <a name="Initializers" id="@cdktf/provider-gitlab.groupAccessToken.GroupAccessToken.Initializer"></a>

```typescript
import { groupAccessToken } from '@cdktf/provider-gitlab'

new groupAccessToken.GroupAccessToken(scope: Construct, id: string, config: GroupAccessTokenConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.groupAccessToken.GroupAccessToken.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-gitlab.groupAccessToken.GroupAccessToken.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-gitlab.groupAccessToken.GroupAccessToken.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-gitlab.groupAccessToken.GroupAccessTokenConfig">GroupAccessTokenConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-gitlab.groupAccessToken.GroupAccessToken.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-gitlab.groupAccessToken.GroupAccessToken.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-gitlab.groupAccessToken.GroupAccessToken.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-gitlab.groupAccessToken.GroupAccessTokenConfig">GroupAccessTokenConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-gitlab.groupAccessToken.GroupAccessToken.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-gitlab.groupAccessToken.GroupAccessToken.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupAccessToken.GroupAccessToken.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-gitlab.groupAccessToken.GroupAccessToken.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-gitlab.groupAccessToken.GroupAccessToken.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupAccessToken.GroupAccessToken.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupAccessToken.GroupAccessToken.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-gitlab.groupAccessToken.GroupAccessToken.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-gitlab.groupAccessToken.GroupAccessToken.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupAccessToken.GroupAccessToken.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupAccessToken.GroupAccessToken.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupAccessToken.GroupAccessToken.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupAccessToken.GroupAccessToken.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupAccessToken.GroupAccessToken.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupAccessToken.GroupAccessToken.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupAccessToken.GroupAccessToken.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupAccessToken.GroupAccessToken.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupAccessToken.GroupAccessToken.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupAccessToken.GroupAccessToken.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupAccessToken.GroupAccessToken.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupAccessToken.GroupAccessToken.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-gitlab.groupAccessToken.GroupAccessToken.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-gitlab.groupAccessToken.GroupAccessToken.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-gitlab.groupAccessToken.GroupAccessToken.putRotationConfiguration">putRotationConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupAccessToken.GroupAccessToken.resetAccessLevel">resetAccessLevel</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupAccessToken.GroupAccessToken.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupAccessToken.GroupAccessToken.resetExpiresAt">resetExpiresAt</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupAccessToken.GroupAccessToken.resetRotationConfiguration">resetRotationConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupAccessToken.GroupAccessToken.resetValidatePastExpirationDate">resetValidatePastExpirationDate</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-gitlab.groupAccessToken.GroupAccessToken.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-gitlab.groupAccessToken.GroupAccessToken.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-gitlab.groupAccessToken.GroupAccessToken.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-gitlab.groupAccessToken.GroupAccessToken.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-gitlab.groupAccessToken.GroupAccessToken.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-gitlab.groupAccessToken.GroupAccessToken.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-gitlab.groupAccessToken.GroupAccessToken.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-gitlab.groupAccessToken.GroupAccessToken.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-gitlab.groupAccessToken.GroupAccessToken.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-gitlab.groupAccessToken.GroupAccessToken.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-gitlab.groupAccessToken.GroupAccessToken.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-gitlab.groupAccessToken.GroupAccessToken.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-gitlab.groupAccessToken.GroupAccessToken.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.groupAccessToken.GroupAccessToken.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-gitlab.groupAccessToken.GroupAccessToken.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.groupAccessToken.GroupAccessToken.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-gitlab.groupAccessToken.GroupAccessToken.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.groupAccessToken.GroupAccessToken.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-gitlab.groupAccessToken.GroupAccessToken.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.groupAccessToken.GroupAccessToken.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-gitlab.groupAccessToken.GroupAccessToken.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.groupAccessToken.GroupAccessToken.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-gitlab.groupAccessToken.GroupAccessToken.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.groupAccessToken.GroupAccessToken.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-gitlab.groupAccessToken.GroupAccessToken.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.groupAccessToken.GroupAccessToken.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-gitlab.groupAccessToken.GroupAccessToken.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.groupAccessToken.GroupAccessToken.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-gitlab.groupAccessToken.GroupAccessToken.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.groupAccessToken.GroupAccessToken.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-gitlab.groupAccessToken.GroupAccessToken.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-gitlab.groupAccessToken.GroupAccessToken.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-gitlab.groupAccessToken.GroupAccessToken.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-gitlab.groupAccessToken.GroupAccessToken.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-gitlab.groupAccessToken.GroupAccessToken.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.groupAccessToken.GroupAccessToken.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-gitlab.groupAccessToken.GroupAccessToken.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-gitlab.groupAccessToken.GroupAccessToken.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-gitlab.groupAccessToken.GroupAccessToken.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-gitlab.groupAccessToken.GroupAccessToken.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-gitlab.groupAccessToken.GroupAccessToken.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-gitlab.groupAccessToken.GroupAccessToken.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-gitlab.groupAccessToken.GroupAccessToken.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putRotationConfiguration` <a name="putRotationConfiguration" id="@cdktf/provider-gitlab.groupAccessToken.GroupAccessToken.putRotationConfiguration"></a>

```typescript
public putRotationConfiguration(value: GroupAccessTokenRotationConfiguration): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-gitlab.groupAccessToken.GroupAccessToken.putRotationConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-gitlab.groupAccessToken.GroupAccessTokenRotationConfiguration">GroupAccessTokenRotationConfiguration</a>

---

##### `resetAccessLevel` <a name="resetAccessLevel" id="@cdktf/provider-gitlab.groupAccessToken.GroupAccessToken.resetAccessLevel"></a>

```typescript
public resetAccessLevel(): void
```

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-gitlab.groupAccessToken.GroupAccessToken.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetExpiresAt` <a name="resetExpiresAt" id="@cdktf/provider-gitlab.groupAccessToken.GroupAccessToken.resetExpiresAt"></a>

```typescript
public resetExpiresAt(): void
```

##### `resetRotationConfiguration` <a name="resetRotationConfiguration" id="@cdktf/provider-gitlab.groupAccessToken.GroupAccessToken.resetRotationConfiguration"></a>

```typescript
public resetRotationConfiguration(): void
```

##### `resetValidatePastExpirationDate` <a name="resetValidatePastExpirationDate" id="@cdktf/provider-gitlab.groupAccessToken.GroupAccessToken.resetValidatePastExpirationDate"></a>

```typescript
public resetValidatePastExpirationDate(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-gitlab.groupAccessToken.GroupAccessToken.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-gitlab.groupAccessToken.GroupAccessToken.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupAccessToken.GroupAccessToken.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupAccessToken.GroupAccessToken.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a GroupAccessToken resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-gitlab.groupAccessToken.GroupAccessToken.isConstruct"></a>

```typescript
import { groupAccessToken } from '@cdktf/provider-gitlab'

groupAccessToken.GroupAccessToken.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-gitlab.groupAccessToken.GroupAccessToken.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-gitlab.groupAccessToken.GroupAccessToken.isTerraformElement"></a>

```typescript
import { groupAccessToken } from '@cdktf/provider-gitlab'

groupAccessToken.GroupAccessToken.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-gitlab.groupAccessToken.GroupAccessToken.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-gitlab.groupAccessToken.GroupAccessToken.isTerraformResource"></a>

```typescript
import { groupAccessToken } from '@cdktf/provider-gitlab'

groupAccessToken.GroupAccessToken.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-gitlab.groupAccessToken.GroupAccessToken.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-gitlab.groupAccessToken.GroupAccessToken.generateConfigForImport"></a>

```typescript
import { groupAccessToken } from '@cdktf/provider-gitlab'

groupAccessToken.GroupAccessToken.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a GroupAccessToken resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-gitlab.groupAccessToken.GroupAccessToken.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-gitlab.groupAccessToken.GroupAccessToken.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the GroupAccessToken to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-gitlab.groupAccessToken.GroupAccessToken.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing GroupAccessToken that should be imported.

Refer to the {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.6.1/docs/resources/group_access_token#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-gitlab.groupAccessToken.GroupAccessToken.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the GroupAccessToken to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.groupAccessToken.GroupAccessToken.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-gitlab.groupAccessToken.GroupAccessToken.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupAccessToken.GroupAccessToken.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupAccessToken.GroupAccessToken.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupAccessToken.GroupAccessToken.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupAccessToken.GroupAccessToken.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupAccessToken.GroupAccessToken.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupAccessToken.GroupAccessToken.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupAccessToken.GroupAccessToken.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupAccessToken.GroupAccessToken.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupAccessToken.GroupAccessToken.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupAccessToken.GroupAccessToken.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupAccessToken.GroupAccessToken.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupAccessToken.GroupAccessToken.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupAccessToken.GroupAccessToken.property.active">active</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupAccessToken.GroupAccessToken.property.createdAt">createdAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupAccessToken.GroupAccessToken.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupAccessToken.GroupAccessToken.property.revoked">revoked</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupAccessToken.GroupAccessToken.property.rotationConfiguration">rotationConfiguration</a></code> | <code><a href="#@cdktf/provider-gitlab.groupAccessToken.GroupAccessTokenRotationConfigurationOutputReference">GroupAccessTokenRotationConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupAccessToken.GroupAccessToken.property.token">token</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupAccessToken.GroupAccessToken.property.userId">userId</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupAccessToken.GroupAccessToken.property.accessLevelInput">accessLevelInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupAccessToken.GroupAccessToken.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupAccessToken.GroupAccessToken.property.expiresAtInput">expiresAtInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupAccessToken.GroupAccessToken.property.groupInput">groupInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupAccessToken.GroupAccessToken.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupAccessToken.GroupAccessToken.property.rotationConfigurationInput">rotationConfigurationInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-gitlab.groupAccessToken.GroupAccessTokenRotationConfiguration">GroupAccessTokenRotationConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupAccessToken.GroupAccessToken.property.scopesInput">scopesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupAccessToken.GroupAccessToken.property.validatePastExpirationDateInput">validatePastExpirationDateInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupAccessToken.GroupAccessToken.property.accessLevel">accessLevel</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupAccessToken.GroupAccessToken.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupAccessToken.GroupAccessToken.property.expiresAt">expiresAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupAccessToken.GroupAccessToken.property.group">group</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupAccessToken.GroupAccessToken.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupAccessToken.GroupAccessToken.property.scopes">scopes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupAccessToken.GroupAccessToken.property.validatePastExpirationDate">validatePastExpirationDate</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-gitlab.groupAccessToken.GroupAccessToken.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-gitlab.groupAccessToken.GroupAccessToken.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-gitlab.groupAccessToken.GroupAccessToken.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-gitlab.groupAccessToken.GroupAccessToken.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-gitlab.groupAccessToken.GroupAccessToken.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-gitlab.groupAccessToken.GroupAccessToken.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-gitlab.groupAccessToken.GroupAccessToken.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-gitlab.groupAccessToken.GroupAccessToken.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-gitlab.groupAccessToken.GroupAccessToken.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-gitlab.groupAccessToken.GroupAccessToken.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-gitlab.groupAccessToken.GroupAccessToken.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-gitlab.groupAccessToken.GroupAccessToken.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-gitlab.groupAccessToken.GroupAccessToken.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-gitlab.groupAccessToken.GroupAccessToken.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `active`<sup>Required</sup> <a name="active" id="@cdktf/provider-gitlab.groupAccessToken.GroupAccessToken.property.active"></a>

```typescript
public readonly active: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `createdAt`<sup>Required</sup> <a name="createdAt" id="@cdktf/provider-gitlab.groupAccessToken.GroupAccessToken.property.createdAt"></a>

```typescript
public readonly createdAt: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-gitlab.groupAccessToken.GroupAccessToken.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `revoked`<sup>Required</sup> <a name="revoked" id="@cdktf/provider-gitlab.groupAccessToken.GroupAccessToken.property.revoked"></a>

```typescript
public readonly revoked: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `rotationConfiguration`<sup>Required</sup> <a name="rotationConfiguration" id="@cdktf/provider-gitlab.groupAccessToken.GroupAccessToken.property.rotationConfiguration"></a>

```typescript
public readonly rotationConfiguration: GroupAccessTokenRotationConfigurationOutputReference;
```

- *Type:* <a href="#@cdktf/provider-gitlab.groupAccessToken.GroupAccessTokenRotationConfigurationOutputReference">GroupAccessTokenRotationConfigurationOutputReference</a>

---

##### `token`<sup>Required</sup> <a name="token" id="@cdktf/provider-gitlab.groupAccessToken.GroupAccessToken.property.token"></a>

```typescript
public readonly token: string;
```

- *Type:* string

---

##### `userId`<sup>Required</sup> <a name="userId" id="@cdktf/provider-gitlab.groupAccessToken.GroupAccessToken.property.userId"></a>

```typescript
public readonly userId: number;
```

- *Type:* number

---

##### `accessLevelInput`<sup>Optional</sup> <a name="accessLevelInput" id="@cdktf/provider-gitlab.groupAccessToken.GroupAccessToken.property.accessLevelInput"></a>

```typescript
public readonly accessLevelInput: string;
```

- *Type:* string

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-gitlab.groupAccessToken.GroupAccessToken.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `expiresAtInput`<sup>Optional</sup> <a name="expiresAtInput" id="@cdktf/provider-gitlab.groupAccessToken.GroupAccessToken.property.expiresAtInput"></a>

```typescript
public readonly expiresAtInput: string;
```

- *Type:* string

---

##### `groupInput`<sup>Optional</sup> <a name="groupInput" id="@cdktf/provider-gitlab.groupAccessToken.GroupAccessToken.property.groupInput"></a>

```typescript
public readonly groupInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-gitlab.groupAccessToken.GroupAccessToken.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `rotationConfigurationInput`<sup>Optional</sup> <a name="rotationConfigurationInput" id="@cdktf/provider-gitlab.groupAccessToken.GroupAccessToken.property.rotationConfigurationInput"></a>

```typescript
public readonly rotationConfigurationInput: IResolvable | GroupAccessTokenRotationConfiguration;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-gitlab.groupAccessToken.GroupAccessTokenRotationConfiguration">GroupAccessTokenRotationConfiguration</a>

---

##### `scopesInput`<sup>Optional</sup> <a name="scopesInput" id="@cdktf/provider-gitlab.groupAccessToken.GroupAccessToken.property.scopesInput"></a>

```typescript
public readonly scopesInput: string[];
```

- *Type:* string[]

---

##### `validatePastExpirationDateInput`<sup>Optional</sup> <a name="validatePastExpirationDateInput" id="@cdktf/provider-gitlab.groupAccessToken.GroupAccessToken.property.validatePastExpirationDateInput"></a>

```typescript
public readonly validatePastExpirationDateInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `accessLevel`<sup>Required</sup> <a name="accessLevel" id="@cdktf/provider-gitlab.groupAccessToken.GroupAccessToken.property.accessLevel"></a>

```typescript
public readonly accessLevel: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-gitlab.groupAccessToken.GroupAccessToken.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `expiresAt`<sup>Required</sup> <a name="expiresAt" id="@cdktf/provider-gitlab.groupAccessToken.GroupAccessToken.property.expiresAt"></a>

```typescript
public readonly expiresAt: string;
```

- *Type:* string

---

##### `group`<sup>Required</sup> <a name="group" id="@cdktf/provider-gitlab.groupAccessToken.GroupAccessToken.property.group"></a>

```typescript
public readonly group: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-gitlab.groupAccessToken.GroupAccessToken.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `scopes`<sup>Required</sup> <a name="scopes" id="@cdktf/provider-gitlab.groupAccessToken.GroupAccessToken.property.scopes"></a>

```typescript
public readonly scopes: string[];
```

- *Type:* string[]

---

##### `validatePastExpirationDate`<sup>Required</sup> <a name="validatePastExpirationDate" id="@cdktf/provider-gitlab.groupAccessToken.GroupAccessToken.property.validatePastExpirationDate"></a>

```typescript
public readonly validatePastExpirationDate: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.groupAccessToken.GroupAccessToken.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-gitlab.groupAccessToken.GroupAccessToken.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### GroupAccessTokenConfig <a name="GroupAccessTokenConfig" id="@cdktf/provider-gitlab.groupAccessToken.GroupAccessTokenConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-gitlab.groupAccessToken.GroupAccessTokenConfig.Initializer"></a>

```typescript
import { groupAccessToken } from '@cdktf/provider-gitlab'

const groupAccessTokenConfig: groupAccessToken.GroupAccessTokenConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.groupAccessToken.GroupAccessTokenConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupAccessToken.GroupAccessTokenConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupAccessToken.GroupAccessTokenConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupAccessToken.GroupAccessTokenConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupAccessToken.GroupAccessTokenConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupAccessToken.GroupAccessTokenConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupAccessToken.GroupAccessTokenConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupAccessToken.GroupAccessTokenConfig.property.group">group</a></code> | <code>string</code> | The ID or full path of the group. |
| <code><a href="#@cdktf/provider-gitlab.groupAccessToken.GroupAccessTokenConfig.property.name">name</a></code> | <code>string</code> | The name of the group access token. |
| <code><a href="#@cdktf/provider-gitlab.groupAccessToken.GroupAccessTokenConfig.property.scopes">scopes</a></code> | <code>string[]</code> | The scopes of the group access token. |
| <code><a href="#@cdktf/provider-gitlab.groupAccessToken.GroupAccessTokenConfig.property.accessLevel">accessLevel</a></code> | <code>string</code> | The access level for the group access token. |
| <code><a href="#@cdktf/provider-gitlab.groupAccessToken.GroupAccessTokenConfig.property.description">description</a></code> | <code>string</code> | The description of the group access token. |
| <code><a href="#@cdktf/provider-gitlab.groupAccessToken.GroupAccessTokenConfig.property.expiresAt">expiresAt</a></code> | <code>string</code> | When the token will expire, YYYY-MM-DD format. |
| <code><a href="#@cdktf/provider-gitlab.groupAccessToken.GroupAccessTokenConfig.property.rotationConfiguration">rotationConfiguration</a></code> | <code><a href="#@cdktf/provider-gitlab.groupAccessToken.GroupAccessTokenRotationConfiguration">GroupAccessTokenRotationConfiguration</a></code> | The configuration for when to rotate a token automatically. Will not rotate a token until `terraform apply` is run. |
| <code><a href="#@cdktf/provider-gitlab.groupAccessToken.GroupAccessTokenConfig.property.validatePastExpirationDate">validatePastExpirationDate</a></code> | <code>boolean \| cdktf.IResolvable</code> | Wether to validate if the expiration date is in the future. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-gitlab.groupAccessToken.GroupAccessTokenConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-gitlab.groupAccessToken.GroupAccessTokenConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-gitlab.groupAccessToken.GroupAccessTokenConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-gitlab.groupAccessToken.GroupAccessTokenConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-gitlab.groupAccessToken.GroupAccessTokenConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-gitlab.groupAccessToken.GroupAccessTokenConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-gitlab.groupAccessToken.GroupAccessTokenConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `group`<sup>Required</sup> <a name="group" id="@cdktf/provider-gitlab.groupAccessToken.GroupAccessTokenConfig.property.group"></a>

```typescript
public readonly group: string;
```

- *Type:* string

The ID or full path of the group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.6.1/docs/resources/group_access_token#group GroupAccessToken#group}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-gitlab.groupAccessToken.GroupAccessTokenConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

The name of the group access token.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.6.1/docs/resources/group_access_token#name GroupAccessToken#name}

---

##### `scopes`<sup>Required</sup> <a name="scopes" id="@cdktf/provider-gitlab.groupAccessToken.GroupAccessTokenConfig.property.scopes"></a>

```typescript
public readonly scopes: string[];
```

- *Type:* string[]

The scopes of the group access token.

Valid values are: `api`, `read_api`, `read_registry`, `write_registry`, `read_virtual_registry`, `write_virtual_registry`, `read_repository`, `write_repository`, `create_runner`, `manage_runner`, `ai_features`, `k8s_proxy`, `read_observability`, `write_observability`, `self_rotate`

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.6.1/docs/resources/group_access_token#scopes GroupAccessToken#scopes}

---

##### `accessLevel`<sup>Optional</sup> <a name="accessLevel" id="@cdktf/provider-gitlab.groupAccessToken.GroupAccessTokenConfig.property.accessLevel"></a>

```typescript
public readonly accessLevel: string;
```

- *Type:* string

The access level for the group access token.

Valid values are: `no one`, `minimal`, `guest`, `planner`, `reporter`, `developer`, `maintainer`, `owner`. Default is `maintainer`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.6.1/docs/resources/group_access_token#access_level GroupAccessToken#access_level}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-gitlab.groupAccessToken.GroupAccessTokenConfig.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

The description of the group access token.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.6.1/docs/resources/group_access_token#description GroupAccessToken#description}

---

##### `expiresAt`<sup>Optional</sup> <a name="expiresAt" id="@cdktf/provider-gitlab.groupAccessToken.GroupAccessTokenConfig.property.expiresAt"></a>

```typescript
public readonly expiresAt: string;
```

- *Type:* string

When the token will expire, YYYY-MM-DD format.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.6.1/docs/resources/group_access_token#expires_at GroupAccessToken#expires_at}

---

##### `rotationConfiguration`<sup>Optional</sup> <a name="rotationConfiguration" id="@cdktf/provider-gitlab.groupAccessToken.GroupAccessTokenConfig.property.rotationConfiguration"></a>

```typescript
public readonly rotationConfiguration: GroupAccessTokenRotationConfiguration;
```

- *Type:* <a href="#@cdktf/provider-gitlab.groupAccessToken.GroupAccessTokenRotationConfiguration">GroupAccessTokenRotationConfiguration</a>

The configuration for when to rotate a token automatically. Will not rotate a token until `terraform apply` is run.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.6.1/docs/resources/group_access_token#rotation_configuration GroupAccessToken#rotation_configuration}

---

##### `validatePastExpirationDate`<sup>Optional</sup> <a name="validatePastExpirationDate" id="@cdktf/provider-gitlab.groupAccessToken.GroupAccessTokenConfig.property.validatePastExpirationDate"></a>

```typescript
public readonly validatePastExpirationDate: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Wether to validate if the expiration date is in the future.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.6.1/docs/resources/group_access_token#validate_past_expiration_date GroupAccessToken#validate_past_expiration_date}

---

### GroupAccessTokenRotationConfiguration <a name="GroupAccessTokenRotationConfiguration" id="@cdktf/provider-gitlab.groupAccessToken.GroupAccessTokenRotationConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-gitlab.groupAccessToken.GroupAccessTokenRotationConfiguration.Initializer"></a>

```typescript
import { groupAccessToken } from '@cdktf/provider-gitlab'

const groupAccessTokenRotationConfiguration: groupAccessToken.GroupAccessTokenRotationConfiguration = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.groupAccessToken.GroupAccessTokenRotationConfiguration.property.expirationDays">expirationDays</a></code> | <code>number</code> | The duration (in days) the new token should be valid for. |
| <code><a href="#@cdktf/provider-gitlab.groupAccessToken.GroupAccessTokenRotationConfiguration.property.rotateBeforeDays">rotateBeforeDays</a></code> | <code>number</code> | The duration (in days) before the expiration when the token should be rotated. |

---

##### `expirationDays`<sup>Required</sup> <a name="expirationDays" id="@cdktf/provider-gitlab.groupAccessToken.GroupAccessTokenRotationConfiguration.property.expirationDays"></a>

```typescript
public readonly expirationDays: number;
```

- *Type:* number

The duration (in days) the new token should be valid for.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.6.1/docs/resources/group_access_token#expiration_days GroupAccessToken#expiration_days}

---

##### `rotateBeforeDays`<sup>Required</sup> <a name="rotateBeforeDays" id="@cdktf/provider-gitlab.groupAccessToken.GroupAccessTokenRotationConfiguration.property.rotateBeforeDays"></a>

```typescript
public readonly rotateBeforeDays: number;
```

- *Type:* number

The duration (in days) before the expiration when the token should be rotated.

As an example, if set to 7 days, the token will rotate 7 days before the expiration date, but only when `terraform apply` is run in that timeframe.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.6.1/docs/resources/group_access_token#rotate_before_days GroupAccessToken#rotate_before_days}

---

## Classes <a name="Classes" id="Classes"></a>

### GroupAccessTokenRotationConfigurationOutputReference <a name="GroupAccessTokenRotationConfigurationOutputReference" id="@cdktf/provider-gitlab.groupAccessToken.GroupAccessTokenRotationConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-gitlab.groupAccessToken.GroupAccessTokenRotationConfigurationOutputReference.Initializer"></a>

```typescript
import { groupAccessToken } from '@cdktf/provider-gitlab'

new groupAccessToken.GroupAccessTokenRotationConfigurationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.groupAccessToken.GroupAccessTokenRotationConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-gitlab.groupAccessToken.GroupAccessTokenRotationConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-gitlab.groupAccessToken.GroupAccessTokenRotationConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.groupAccessToken.GroupAccessTokenRotationConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-gitlab.groupAccessToken.GroupAccessTokenRotationConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupAccessToken.GroupAccessTokenRotationConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupAccessToken.GroupAccessTokenRotationConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupAccessToken.GroupAccessTokenRotationConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupAccessToken.GroupAccessTokenRotationConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupAccessToken.GroupAccessTokenRotationConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupAccessToken.GroupAccessTokenRotationConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupAccessToken.GroupAccessTokenRotationConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupAccessToken.GroupAccessTokenRotationConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupAccessToken.GroupAccessTokenRotationConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupAccessToken.GroupAccessTokenRotationConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupAccessToken.GroupAccessTokenRotationConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-gitlab.groupAccessToken.GroupAccessTokenRotationConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-gitlab.groupAccessToken.GroupAccessTokenRotationConfigurationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-gitlab.groupAccessToken.GroupAccessTokenRotationConfigurationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.groupAccessToken.GroupAccessTokenRotationConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-gitlab.groupAccessToken.GroupAccessTokenRotationConfigurationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.groupAccessToken.GroupAccessTokenRotationConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-gitlab.groupAccessToken.GroupAccessTokenRotationConfigurationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.groupAccessToken.GroupAccessTokenRotationConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-gitlab.groupAccessToken.GroupAccessTokenRotationConfigurationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.groupAccessToken.GroupAccessTokenRotationConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-gitlab.groupAccessToken.GroupAccessTokenRotationConfigurationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.groupAccessToken.GroupAccessTokenRotationConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-gitlab.groupAccessToken.GroupAccessTokenRotationConfigurationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.groupAccessToken.GroupAccessTokenRotationConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-gitlab.groupAccessToken.GroupAccessTokenRotationConfigurationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.groupAccessToken.GroupAccessTokenRotationConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-gitlab.groupAccessToken.GroupAccessTokenRotationConfigurationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.groupAccessToken.GroupAccessTokenRotationConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-gitlab.groupAccessToken.GroupAccessTokenRotationConfigurationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.groupAccessToken.GroupAccessTokenRotationConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-gitlab.groupAccessToken.GroupAccessTokenRotationConfigurationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-gitlab.groupAccessToken.GroupAccessTokenRotationConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-gitlab.groupAccessToken.GroupAccessTokenRotationConfigurationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-gitlab.groupAccessToken.GroupAccessTokenRotationConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-gitlab.groupAccessToken.GroupAccessTokenRotationConfigurationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.groupAccessToken.GroupAccessTokenRotationConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-gitlab.groupAccessToken.GroupAccessTokenRotationConfigurationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupAccessToken.GroupAccessTokenRotationConfigurationOutputReference.property.expirationDaysInput">expirationDaysInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupAccessToken.GroupAccessTokenRotationConfigurationOutputReference.property.rotateBeforeDaysInput">rotateBeforeDaysInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupAccessToken.GroupAccessTokenRotationConfigurationOutputReference.property.expirationDays">expirationDays</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupAccessToken.GroupAccessTokenRotationConfigurationOutputReference.property.rotateBeforeDays">rotateBeforeDays</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupAccessToken.GroupAccessTokenRotationConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-gitlab.groupAccessToken.GroupAccessTokenRotationConfiguration">GroupAccessTokenRotationConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-gitlab.groupAccessToken.GroupAccessTokenRotationConfigurationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-gitlab.groupAccessToken.GroupAccessTokenRotationConfigurationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `expirationDaysInput`<sup>Optional</sup> <a name="expirationDaysInput" id="@cdktf/provider-gitlab.groupAccessToken.GroupAccessTokenRotationConfigurationOutputReference.property.expirationDaysInput"></a>

```typescript
public readonly expirationDaysInput: number;
```

- *Type:* number

---

##### `rotateBeforeDaysInput`<sup>Optional</sup> <a name="rotateBeforeDaysInput" id="@cdktf/provider-gitlab.groupAccessToken.GroupAccessTokenRotationConfigurationOutputReference.property.rotateBeforeDaysInput"></a>

```typescript
public readonly rotateBeforeDaysInput: number;
```

- *Type:* number

---

##### `expirationDays`<sup>Required</sup> <a name="expirationDays" id="@cdktf/provider-gitlab.groupAccessToken.GroupAccessTokenRotationConfigurationOutputReference.property.expirationDays"></a>

```typescript
public readonly expirationDays: number;
```

- *Type:* number

---

##### `rotateBeforeDays`<sup>Required</sup> <a name="rotateBeforeDays" id="@cdktf/provider-gitlab.groupAccessToken.GroupAccessTokenRotationConfigurationOutputReference.property.rotateBeforeDays"></a>

```typescript
public readonly rotateBeforeDays: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-gitlab.groupAccessToken.GroupAccessTokenRotationConfigurationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GroupAccessTokenRotationConfiguration;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-gitlab.groupAccessToken.GroupAccessTokenRotationConfiguration">GroupAccessTokenRotationConfiguration</a>

---



