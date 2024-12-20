# `userRunner` Submodule <a name="`userRunner` Submodule" id="@cdktf/provider-gitlab.userRunner"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### UserRunner <a name="UserRunner" id="@cdktf/provider-gitlab.userRunner.UserRunner"></a>

Represents a {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.7.0/docs/resources/user_runner gitlab_user_runner}.

#### Initializers <a name="Initializers" id="@cdktf/provider-gitlab.userRunner.UserRunner.Initializer"></a>

```typescript
import { userRunner } from '@cdktf/provider-gitlab'

new userRunner.UserRunner(scope: Construct, id: string, config: UserRunnerConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.userRunner.UserRunner.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-gitlab.userRunner.UserRunner.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-gitlab.userRunner.UserRunner.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-gitlab.userRunner.UserRunnerConfig">UserRunnerConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-gitlab.userRunner.UserRunner.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-gitlab.userRunner.UserRunner.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-gitlab.userRunner.UserRunner.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-gitlab.userRunner.UserRunnerConfig">UserRunnerConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-gitlab.userRunner.UserRunner.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-gitlab.userRunner.UserRunner.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.userRunner.UserRunner.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-gitlab.userRunner.UserRunner.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-gitlab.userRunner.UserRunner.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.userRunner.UserRunner.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.userRunner.UserRunner.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-gitlab.userRunner.UserRunner.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-gitlab.userRunner.UserRunner.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.userRunner.UserRunner.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.userRunner.UserRunner.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.userRunner.UserRunner.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.userRunner.UserRunner.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.userRunner.UserRunner.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.userRunner.UserRunner.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.userRunner.UserRunner.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.userRunner.UserRunner.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.userRunner.UserRunner.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.userRunner.UserRunner.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.userRunner.UserRunner.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.userRunner.UserRunner.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-gitlab.userRunner.UserRunner.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-gitlab.userRunner.UserRunner.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-gitlab.userRunner.UserRunner.resetAccessLevel">resetAccessLevel</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.userRunner.UserRunner.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.userRunner.UserRunner.resetGroupId">resetGroupId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.userRunner.UserRunner.resetLocked">resetLocked</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.userRunner.UserRunner.resetMaintenanceNote">resetMaintenanceNote</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.userRunner.UserRunner.resetMaximumTimeout">resetMaximumTimeout</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.userRunner.UserRunner.resetPaused">resetPaused</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.userRunner.UserRunner.resetProjectId">resetProjectId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.userRunner.UserRunner.resetTagList">resetTagList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.userRunner.UserRunner.resetUntagged">resetUntagged</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-gitlab.userRunner.UserRunner.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-gitlab.userRunner.UserRunner.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-gitlab.userRunner.UserRunner.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-gitlab.userRunner.UserRunner.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-gitlab.userRunner.UserRunner.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-gitlab.userRunner.UserRunner.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-gitlab.userRunner.UserRunner.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-gitlab.userRunner.UserRunner.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-gitlab.userRunner.UserRunner.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-gitlab.userRunner.UserRunner.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-gitlab.userRunner.UserRunner.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-gitlab.userRunner.UserRunner.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-gitlab.userRunner.UserRunner.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.userRunner.UserRunner.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-gitlab.userRunner.UserRunner.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.userRunner.UserRunner.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-gitlab.userRunner.UserRunner.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.userRunner.UserRunner.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-gitlab.userRunner.UserRunner.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.userRunner.UserRunner.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-gitlab.userRunner.UserRunner.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.userRunner.UserRunner.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-gitlab.userRunner.UserRunner.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.userRunner.UserRunner.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-gitlab.userRunner.UserRunner.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.userRunner.UserRunner.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-gitlab.userRunner.UserRunner.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.userRunner.UserRunner.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-gitlab.userRunner.UserRunner.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.userRunner.UserRunner.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-gitlab.userRunner.UserRunner.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-gitlab.userRunner.UserRunner.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-gitlab.userRunner.UserRunner.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-gitlab.userRunner.UserRunner.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-gitlab.userRunner.UserRunner.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.userRunner.UserRunner.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-gitlab.userRunner.UserRunner.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-gitlab.userRunner.UserRunner.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-gitlab.userRunner.UserRunner.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-gitlab.userRunner.UserRunner.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-gitlab.userRunner.UserRunner.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-gitlab.userRunner.UserRunner.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-gitlab.userRunner.UserRunner.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `resetAccessLevel` <a name="resetAccessLevel" id="@cdktf/provider-gitlab.userRunner.UserRunner.resetAccessLevel"></a>

```typescript
public resetAccessLevel(): void
```

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-gitlab.userRunner.UserRunner.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetGroupId` <a name="resetGroupId" id="@cdktf/provider-gitlab.userRunner.UserRunner.resetGroupId"></a>

```typescript
public resetGroupId(): void
```

##### `resetLocked` <a name="resetLocked" id="@cdktf/provider-gitlab.userRunner.UserRunner.resetLocked"></a>

```typescript
public resetLocked(): void
```

##### `resetMaintenanceNote` <a name="resetMaintenanceNote" id="@cdktf/provider-gitlab.userRunner.UserRunner.resetMaintenanceNote"></a>

```typescript
public resetMaintenanceNote(): void
```

##### `resetMaximumTimeout` <a name="resetMaximumTimeout" id="@cdktf/provider-gitlab.userRunner.UserRunner.resetMaximumTimeout"></a>

```typescript
public resetMaximumTimeout(): void
```

##### `resetPaused` <a name="resetPaused" id="@cdktf/provider-gitlab.userRunner.UserRunner.resetPaused"></a>

```typescript
public resetPaused(): void
```

##### `resetProjectId` <a name="resetProjectId" id="@cdktf/provider-gitlab.userRunner.UserRunner.resetProjectId"></a>

```typescript
public resetProjectId(): void
```

##### `resetTagList` <a name="resetTagList" id="@cdktf/provider-gitlab.userRunner.UserRunner.resetTagList"></a>

```typescript
public resetTagList(): void
```

##### `resetUntagged` <a name="resetUntagged" id="@cdktf/provider-gitlab.userRunner.UserRunner.resetUntagged"></a>

```typescript
public resetUntagged(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-gitlab.userRunner.UserRunner.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-gitlab.userRunner.UserRunner.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.userRunner.UserRunner.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.userRunner.UserRunner.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a UserRunner resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-gitlab.userRunner.UserRunner.isConstruct"></a>

```typescript
import { userRunner } from '@cdktf/provider-gitlab'

userRunner.UserRunner.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-gitlab.userRunner.UserRunner.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-gitlab.userRunner.UserRunner.isTerraformElement"></a>

```typescript
import { userRunner } from '@cdktf/provider-gitlab'

userRunner.UserRunner.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-gitlab.userRunner.UserRunner.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-gitlab.userRunner.UserRunner.isTerraformResource"></a>

```typescript
import { userRunner } from '@cdktf/provider-gitlab'

userRunner.UserRunner.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-gitlab.userRunner.UserRunner.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-gitlab.userRunner.UserRunner.generateConfigForImport"></a>

```typescript
import { userRunner } from '@cdktf/provider-gitlab'

userRunner.UserRunner.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a UserRunner resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-gitlab.userRunner.UserRunner.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-gitlab.userRunner.UserRunner.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the UserRunner to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-gitlab.userRunner.UserRunner.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing UserRunner that should be imported.

Refer to the {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.7.0/docs/resources/user_runner#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-gitlab.userRunner.UserRunner.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the UserRunner to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.userRunner.UserRunner.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-gitlab.userRunner.UserRunner.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.userRunner.UserRunner.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.userRunner.UserRunner.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.userRunner.UserRunner.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.userRunner.UserRunner.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.userRunner.UserRunner.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.userRunner.UserRunner.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.userRunner.UserRunner.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.userRunner.UserRunner.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.userRunner.UserRunner.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.userRunner.UserRunner.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.userRunner.UserRunner.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.userRunner.UserRunner.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.userRunner.UserRunner.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.userRunner.UserRunner.property.token">token</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.userRunner.UserRunner.property.accessLevelInput">accessLevelInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.userRunner.UserRunner.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.userRunner.UserRunner.property.groupIdInput">groupIdInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.userRunner.UserRunner.property.lockedInput">lockedInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.userRunner.UserRunner.property.maintenanceNoteInput">maintenanceNoteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.userRunner.UserRunner.property.maximumTimeoutInput">maximumTimeoutInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.userRunner.UserRunner.property.pausedInput">pausedInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.userRunner.UserRunner.property.projectIdInput">projectIdInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.userRunner.UserRunner.property.runnerTypeInput">runnerTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.userRunner.UserRunner.property.tagListInput">tagListInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.userRunner.UserRunner.property.untaggedInput">untaggedInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.userRunner.UserRunner.property.accessLevel">accessLevel</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.userRunner.UserRunner.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.userRunner.UserRunner.property.groupId">groupId</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.userRunner.UserRunner.property.locked">locked</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.userRunner.UserRunner.property.maintenanceNote">maintenanceNote</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.userRunner.UserRunner.property.maximumTimeout">maximumTimeout</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.userRunner.UserRunner.property.paused">paused</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.userRunner.UserRunner.property.projectId">projectId</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.userRunner.UserRunner.property.runnerType">runnerType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.userRunner.UserRunner.property.tagList">tagList</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.userRunner.UserRunner.property.untagged">untagged</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-gitlab.userRunner.UserRunner.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-gitlab.userRunner.UserRunner.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-gitlab.userRunner.UserRunner.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-gitlab.userRunner.UserRunner.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-gitlab.userRunner.UserRunner.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-gitlab.userRunner.UserRunner.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-gitlab.userRunner.UserRunner.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-gitlab.userRunner.UserRunner.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-gitlab.userRunner.UserRunner.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-gitlab.userRunner.UserRunner.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-gitlab.userRunner.UserRunner.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-gitlab.userRunner.UserRunner.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-gitlab.userRunner.UserRunner.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-gitlab.userRunner.UserRunner.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-gitlab.userRunner.UserRunner.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `token`<sup>Required</sup> <a name="token" id="@cdktf/provider-gitlab.userRunner.UserRunner.property.token"></a>

```typescript
public readonly token: string;
```

- *Type:* string

---

##### `accessLevelInput`<sup>Optional</sup> <a name="accessLevelInput" id="@cdktf/provider-gitlab.userRunner.UserRunner.property.accessLevelInput"></a>

```typescript
public readonly accessLevelInput: string;
```

- *Type:* string

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-gitlab.userRunner.UserRunner.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `groupIdInput`<sup>Optional</sup> <a name="groupIdInput" id="@cdktf/provider-gitlab.userRunner.UserRunner.property.groupIdInput"></a>

```typescript
public readonly groupIdInput: number;
```

- *Type:* number

---

##### `lockedInput`<sup>Optional</sup> <a name="lockedInput" id="@cdktf/provider-gitlab.userRunner.UserRunner.property.lockedInput"></a>

```typescript
public readonly lockedInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `maintenanceNoteInput`<sup>Optional</sup> <a name="maintenanceNoteInput" id="@cdktf/provider-gitlab.userRunner.UserRunner.property.maintenanceNoteInput"></a>

```typescript
public readonly maintenanceNoteInput: string;
```

- *Type:* string

---

##### `maximumTimeoutInput`<sup>Optional</sup> <a name="maximumTimeoutInput" id="@cdktf/provider-gitlab.userRunner.UserRunner.property.maximumTimeoutInput"></a>

```typescript
public readonly maximumTimeoutInput: number;
```

- *Type:* number

---

##### `pausedInput`<sup>Optional</sup> <a name="pausedInput" id="@cdktf/provider-gitlab.userRunner.UserRunner.property.pausedInput"></a>

```typescript
public readonly pausedInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `projectIdInput`<sup>Optional</sup> <a name="projectIdInput" id="@cdktf/provider-gitlab.userRunner.UserRunner.property.projectIdInput"></a>

```typescript
public readonly projectIdInput: number;
```

- *Type:* number

---

##### `runnerTypeInput`<sup>Optional</sup> <a name="runnerTypeInput" id="@cdktf/provider-gitlab.userRunner.UserRunner.property.runnerTypeInput"></a>

```typescript
public readonly runnerTypeInput: string;
```

- *Type:* string

---

##### `tagListInput`<sup>Optional</sup> <a name="tagListInput" id="@cdktf/provider-gitlab.userRunner.UserRunner.property.tagListInput"></a>

```typescript
public readonly tagListInput: string[];
```

- *Type:* string[]

---

##### `untaggedInput`<sup>Optional</sup> <a name="untaggedInput" id="@cdktf/provider-gitlab.userRunner.UserRunner.property.untaggedInput"></a>

```typescript
public readonly untaggedInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `accessLevel`<sup>Required</sup> <a name="accessLevel" id="@cdktf/provider-gitlab.userRunner.UserRunner.property.accessLevel"></a>

```typescript
public readonly accessLevel: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-gitlab.userRunner.UserRunner.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `groupId`<sup>Required</sup> <a name="groupId" id="@cdktf/provider-gitlab.userRunner.UserRunner.property.groupId"></a>

```typescript
public readonly groupId: number;
```

- *Type:* number

---

##### `locked`<sup>Required</sup> <a name="locked" id="@cdktf/provider-gitlab.userRunner.UserRunner.property.locked"></a>

```typescript
public readonly locked: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `maintenanceNote`<sup>Required</sup> <a name="maintenanceNote" id="@cdktf/provider-gitlab.userRunner.UserRunner.property.maintenanceNote"></a>

```typescript
public readonly maintenanceNote: string;
```

- *Type:* string

---

##### `maximumTimeout`<sup>Required</sup> <a name="maximumTimeout" id="@cdktf/provider-gitlab.userRunner.UserRunner.property.maximumTimeout"></a>

```typescript
public readonly maximumTimeout: number;
```

- *Type:* number

---

##### `paused`<sup>Required</sup> <a name="paused" id="@cdktf/provider-gitlab.userRunner.UserRunner.property.paused"></a>

```typescript
public readonly paused: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `projectId`<sup>Required</sup> <a name="projectId" id="@cdktf/provider-gitlab.userRunner.UserRunner.property.projectId"></a>

```typescript
public readonly projectId: number;
```

- *Type:* number

---

##### `runnerType`<sup>Required</sup> <a name="runnerType" id="@cdktf/provider-gitlab.userRunner.UserRunner.property.runnerType"></a>

```typescript
public readonly runnerType: string;
```

- *Type:* string

---

##### `tagList`<sup>Required</sup> <a name="tagList" id="@cdktf/provider-gitlab.userRunner.UserRunner.property.tagList"></a>

```typescript
public readonly tagList: string[];
```

- *Type:* string[]

---

##### `untagged`<sup>Required</sup> <a name="untagged" id="@cdktf/provider-gitlab.userRunner.UserRunner.property.untagged"></a>

```typescript
public readonly untagged: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.userRunner.UserRunner.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-gitlab.userRunner.UserRunner.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### UserRunnerConfig <a name="UserRunnerConfig" id="@cdktf/provider-gitlab.userRunner.UserRunnerConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-gitlab.userRunner.UserRunnerConfig.Initializer"></a>

```typescript
import { userRunner } from '@cdktf/provider-gitlab'

const userRunnerConfig: userRunner.UserRunnerConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.userRunner.UserRunnerConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.userRunner.UserRunnerConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.userRunner.UserRunnerConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.userRunner.UserRunnerConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.userRunner.UserRunnerConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.userRunner.UserRunnerConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.userRunner.UserRunnerConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.userRunner.UserRunnerConfig.property.runnerType">runnerType</a></code> | <code>string</code> | The scope of the runner. Valid values are: `instance_type`, `group_type`, `project_type`. |
| <code><a href="#@cdktf/provider-gitlab.userRunner.UserRunnerConfig.property.accessLevel">accessLevel</a></code> | <code>string</code> | The access level of the runner. Valid values are: `not_protected`, `ref_protected`. |
| <code><a href="#@cdktf/provider-gitlab.userRunner.UserRunnerConfig.property.description">description</a></code> | <code>string</code> | Description of the runner. |
| <code><a href="#@cdktf/provider-gitlab.userRunner.UserRunnerConfig.property.groupId">groupId</a></code> | <code>number</code> | The ID of the group that the runner is created in. Required if runner_type is group_type. |
| <code><a href="#@cdktf/provider-gitlab.userRunner.UserRunnerConfig.property.locked">locked</a></code> | <code>boolean \| cdktf.IResolvable</code> | Specifies if the runner should be locked for the current project. |
| <code><a href="#@cdktf/provider-gitlab.userRunner.UserRunnerConfig.property.maintenanceNote">maintenanceNote</a></code> | <code>string</code> | Free-form maintenance notes for the runner (1024 characters). |
| <code><a href="#@cdktf/provider-gitlab.userRunner.UserRunnerConfig.property.maximumTimeout">maximumTimeout</a></code> | <code>number</code> | Maximum timeout that limits the amount of time (in seconds) that runners can run jobs. |
| <code><a href="#@cdktf/provider-gitlab.userRunner.UserRunnerConfig.property.paused">paused</a></code> | <code>boolean \| cdktf.IResolvable</code> | Specifies if the runner should ignore new jobs. |
| <code><a href="#@cdktf/provider-gitlab.userRunner.UserRunnerConfig.property.projectId">projectId</a></code> | <code>number</code> | The ID of the project that the runner is created in. Required if runner_type is project_type. |
| <code><a href="#@cdktf/provider-gitlab.userRunner.UserRunnerConfig.property.tagList">tagList</a></code> | <code>string[]</code> | A list of runner tags. |
| <code><a href="#@cdktf/provider-gitlab.userRunner.UserRunnerConfig.property.untagged">untagged</a></code> | <code>boolean \| cdktf.IResolvable</code> | Specifies if the runner should handle untagged jobs. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-gitlab.userRunner.UserRunnerConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-gitlab.userRunner.UserRunnerConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-gitlab.userRunner.UserRunnerConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-gitlab.userRunner.UserRunnerConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-gitlab.userRunner.UserRunnerConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-gitlab.userRunner.UserRunnerConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-gitlab.userRunner.UserRunnerConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `runnerType`<sup>Required</sup> <a name="runnerType" id="@cdktf/provider-gitlab.userRunner.UserRunnerConfig.property.runnerType"></a>

```typescript
public readonly runnerType: string;
```

- *Type:* string

The scope of the runner. Valid values are: `instance_type`, `group_type`, `project_type`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.7.0/docs/resources/user_runner#runner_type UserRunner#runner_type}

---

##### `accessLevel`<sup>Optional</sup> <a name="accessLevel" id="@cdktf/provider-gitlab.userRunner.UserRunnerConfig.property.accessLevel"></a>

```typescript
public readonly accessLevel: string;
```

- *Type:* string

The access level of the runner. Valid values are: `not_protected`, `ref_protected`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.7.0/docs/resources/user_runner#access_level UserRunner#access_level}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-gitlab.userRunner.UserRunnerConfig.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

Description of the runner.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.7.0/docs/resources/user_runner#description UserRunner#description}

---

##### `groupId`<sup>Optional</sup> <a name="groupId" id="@cdktf/provider-gitlab.userRunner.UserRunnerConfig.property.groupId"></a>

```typescript
public readonly groupId: number;
```

- *Type:* number

The ID of the group that the runner is created in. Required if runner_type is group_type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.7.0/docs/resources/user_runner#group_id UserRunner#group_id}

---

##### `locked`<sup>Optional</sup> <a name="locked" id="@cdktf/provider-gitlab.userRunner.UserRunnerConfig.property.locked"></a>

```typescript
public readonly locked: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Specifies if the runner should be locked for the current project.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.7.0/docs/resources/user_runner#locked UserRunner#locked}

---

##### `maintenanceNote`<sup>Optional</sup> <a name="maintenanceNote" id="@cdktf/provider-gitlab.userRunner.UserRunnerConfig.property.maintenanceNote"></a>

```typescript
public readonly maintenanceNote: string;
```

- *Type:* string

Free-form maintenance notes for the runner (1024 characters).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.7.0/docs/resources/user_runner#maintenance_note UserRunner#maintenance_note}

---

##### `maximumTimeout`<sup>Optional</sup> <a name="maximumTimeout" id="@cdktf/provider-gitlab.userRunner.UserRunnerConfig.property.maximumTimeout"></a>

```typescript
public readonly maximumTimeout: number;
```

- *Type:* number

Maximum timeout that limits the amount of time (in seconds) that runners can run jobs.

Must be at least 600 (10 minutes).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.7.0/docs/resources/user_runner#maximum_timeout UserRunner#maximum_timeout}

---

##### `paused`<sup>Optional</sup> <a name="paused" id="@cdktf/provider-gitlab.userRunner.UserRunnerConfig.property.paused"></a>

```typescript
public readonly paused: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Specifies if the runner should ignore new jobs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.7.0/docs/resources/user_runner#paused UserRunner#paused}

---

##### `projectId`<sup>Optional</sup> <a name="projectId" id="@cdktf/provider-gitlab.userRunner.UserRunnerConfig.property.projectId"></a>

```typescript
public readonly projectId: number;
```

- *Type:* number

The ID of the project that the runner is created in. Required if runner_type is project_type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.7.0/docs/resources/user_runner#project_id UserRunner#project_id}

---

##### `tagList`<sup>Optional</sup> <a name="tagList" id="@cdktf/provider-gitlab.userRunner.UserRunnerConfig.property.tagList"></a>

```typescript
public readonly tagList: string[];
```

- *Type:* string[]

A list of runner tags.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.7.0/docs/resources/user_runner#tag_list UserRunner#tag_list}

---

##### `untagged`<sup>Optional</sup> <a name="untagged" id="@cdktf/provider-gitlab.userRunner.UserRunnerConfig.property.untagged"></a>

```typescript
public readonly untagged: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Specifies if the runner should handle untagged jobs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.7.0/docs/resources/user_runner#untagged UserRunner#untagged}

---



