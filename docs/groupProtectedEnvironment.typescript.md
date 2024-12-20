# `groupProtectedEnvironment` Submodule <a name="`groupProtectedEnvironment` Submodule" id="@cdktf/provider-gitlab.groupProtectedEnvironment"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GroupProtectedEnvironment <a name="GroupProtectedEnvironment" id="@cdktf/provider-gitlab.groupProtectedEnvironment.GroupProtectedEnvironment"></a>

Represents a {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.7.0/docs/resources/group_protected_environment gitlab_group_protected_environment}.

#### Initializers <a name="Initializers" id="@cdktf/provider-gitlab.groupProtectedEnvironment.GroupProtectedEnvironment.Initializer"></a>

```typescript
import { groupProtectedEnvironment } from '@cdktf/provider-gitlab'

new groupProtectedEnvironment.GroupProtectedEnvironment(scope: Construct, id: string, config: GroupProtectedEnvironmentConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.groupProtectedEnvironment.GroupProtectedEnvironment.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-gitlab.groupProtectedEnvironment.GroupProtectedEnvironment.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-gitlab.groupProtectedEnvironment.GroupProtectedEnvironment.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-gitlab.groupProtectedEnvironment.GroupProtectedEnvironmentConfig">GroupProtectedEnvironmentConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-gitlab.groupProtectedEnvironment.GroupProtectedEnvironment.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-gitlab.groupProtectedEnvironment.GroupProtectedEnvironment.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-gitlab.groupProtectedEnvironment.GroupProtectedEnvironment.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-gitlab.groupProtectedEnvironment.GroupProtectedEnvironmentConfig">GroupProtectedEnvironmentConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-gitlab.groupProtectedEnvironment.GroupProtectedEnvironment.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-gitlab.groupProtectedEnvironment.GroupProtectedEnvironment.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupProtectedEnvironment.GroupProtectedEnvironment.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-gitlab.groupProtectedEnvironment.GroupProtectedEnvironment.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-gitlab.groupProtectedEnvironment.GroupProtectedEnvironment.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupProtectedEnvironment.GroupProtectedEnvironment.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupProtectedEnvironment.GroupProtectedEnvironment.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-gitlab.groupProtectedEnvironment.GroupProtectedEnvironment.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-gitlab.groupProtectedEnvironment.GroupProtectedEnvironment.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupProtectedEnvironment.GroupProtectedEnvironment.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupProtectedEnvironment.GroupProtectedEnvironment.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupProtectedEnvironment.GroupProtectedEnvironment.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupProtectedEnvironment.GroupProtectedEnvironment.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupProtectedEnvironment.GroupProtectedEnvironment.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupProtectedEnvironment.GroupProtectedEnvironment.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupProtectedEnvironment.GroupProtectedEnvironment.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupProtectedEnvironment.GroupProtectedEnvironment.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupProtectedEnvironment.GroupProtectedEnvironment.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupProtectedEnvironment.GroupProtectedEnvironment.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupProtectedEnvironment.GroupProtectedEnvironment.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupProtectedEnvironment.GroupProtectedEnvironment.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-gitlab.groupProtectedEnvironment.GroupProtectedEnvironment.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-gitlab.groupProtectedEnvironment.GroupProtectedEnvironment.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-gitlab.groupProtectedEnvironment.GroupProtectedEnvironment.putApprovalRules">putApprovalRules</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupProtectedEnvironment.GroupProtectedEnvironment.putDeployAccessLevels">putDeployAccessLevels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupProtectedEnvironment.GroupProtectedEnvironment.resetApprovalRules">resetApprovalRules</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-gitlab.groupProtectedEnvironment.GroupProtectedEnvironment.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-gitlab.groupProtectedEnvironment.GroupProtectedEnvironment.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-gitlab.groupProtectedEnvironment.GroupProtectedEnvironment.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-gitlab.groupProtectedEnvironment.GroupProtectedEnvironment.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-gitlab.groupProtectedEnvironment.GroupProtectedEnvironment.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-gitlab.groupProtectedEnvironment.GroupProtectedEnvironment.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-gitlab.groupProtectedEnvironment.GroupProtectedEnvironment.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-gitlab.groupProtectedEnvironment.GroupProtectedEnvironment.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-gitlab.groupProtectedEnvironment.GroupProtectedEnvironment.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-gitlab.groupProtectedEnvironment.GroupProtectedEnvironment.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-gitlab.groupProtectedEnvironment.GroupProtectedEnvironment.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-gitlab.groupProtectedEnvironment.GroupProtectedEnvironment.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-gitlab.groupProtectedEnvironment.GroupProtectedEnvironment.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.groupProtectedEnvironment.GroupProtectedEnvironment.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-gitlab.groupProtectedEnvironment.GroupProtectedEnvironment.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.groupProtectedEnvironment.GroupProtectedEnvironment.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-gitlab.groupProtectedEnvironment.GroupProtectedEnvironment.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.groupProtectedEnvironment.GroupProtectedEnvironment.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-gitlab.groupProtectedEnvironment.GroupProtectedEnvironment.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.groupProtectedEnvironment.GroupProtectedEnvironment.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-gitlab.groupProtectedEnvironment.GroupProtectedEnvironment.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.groupProtectedEnvironment.GroupProtectedEnvironment.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-gitlab.groupProtectedEnvironment.GroupProtectedEnvironment.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.groupProtectedEnvironment.GroupProtectedEnvironment.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-gitlab.groupProtectedEnvironment.GroupProtectedEnvironment.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.groupProtectedEnvironment.GroupProtectedEnvironment.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-gitlab.groupProtectedEnvironment.GroupProtectedEnvironment.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.groupProtectedEnvironment.GroupProtectedEnvironment.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-gitlab.groupProtectedEnvironment.GroupProtectedEnvironment.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.groupProtectedEnvironment.GroupProtectedEnvironment.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-gitlab.groupProtectedEnvironment.GroupProtectedEnvironment.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-gitlab.groupProtectedEnvironment.GroupProtectedEnvironment.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-gitlab.groupProtectedEnvironment.GroupProtectedEnvironment.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-gitlab.groupProtectedEnvironment.GroupProtectedEnvironment.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-gitlab.groupProtectedEnvironment.GroupProtectedEnvironment.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.groupProtectedEnvironment.GroupProtectedEnvironment.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-gitlab.groupProtectedEnvironment.GroupProtectedEnvironment.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-gitlab.groupProtectedEnvironment.GroupProtectedEnvironment.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-gitlab.groupProtectedEnvironment.GroupProtectedEnvironment.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-gitlab.groupProtectedEnvironment.GroupProtectedEnvironment.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-gitlab.groupProtectedEnvironment.GroupProtectedEnvironment.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-gitlab.groupProtectedEnvironment.GroupProtectedEnvironment.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-gitlab.groupProtectedEnvironment.GroupProtectedEnvironment.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putApprovalRules` <a name="putApprovalRules" id="@cdktf/provider-gitlab.groupProtectedEnvironment.GroupProtectedEnvironment.putApprovalRules"></a>

```typescript
public putApprovalRules(value: IResolvable | GroupProtectedEnvironmentApprovalRules[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-gitlab.groupProtectedEnvironment.GroupProtectedEnvironment.putApprovalRules.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-gitlab.groupProtectedEnvironment.GroupProtectedEnvironmentApprovalRules">GroupProtectedEnvironmentApprovalRules</a>[]

---

##### `putDeployAccessLevels` <a name="putDeployAccessLevels" id="@cdktf/provider-gitlab.groupProtectedEnvironment.GroupProtectedEnvironment.putDeployAccessLevels"></a>

```typescript
public putDeployAccessLevels(value: IResolvable | GroupProtectedEnvironmentDeployAccessLevels[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-gitlab.groupProtectedEnvironment.GroupProtectedEnvironment.putDeployAccessLevels.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-gitlab.groupProtectedEnvironment.GroupProtectedEnvironmentDeployAccessLevels">GroupProtectedEnvironmentDeployAccessLevels</a>[]

---

##### `resetApprovalRules` <a name="resetApprovalRules" id="@cdktf/provider-gitlab.groupProtectedEnvironment.GroupProtectedEnvironment.resetApprovalRules"></a>

```typescript
public resetApprovalRules(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-gitlab.groupProtectedEnvironment.GroupProtectedEnvironment.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-gitlab.groupProtectedEnvironment.GroupProtectedEnvironment.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupProtectedEnvironment.GroupProtectedEnvironment.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupProtectedEnvironment.GroupProtectedEnvironment.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a GroupProtectedEnvironment resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-gitlab.groupProtectedEnvironment.GroupProtectedEnvironment.isConstruct"></a>

```typescript
import { groupProtectedEnvironment } from '@cdktf/provider-gitlab'

groupProtectedEnvironment.GroupProtectedEnvironment.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-gitlab.groupProtectedEnvironment.GroupProtectedEnvironment.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-gitlab.groupProtectedEnvironment.GroupProtectedEnvironment.isTerraformElement"></a>

```typescript
import { groupProtectedEnvironment } from '@cdktf/provider-gitlab'

groupProtectedEnvironment.GroupProtectedEnvironment.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-gitlab.groupProtectedEnvironment.GroupProtectedEnvironment.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-gitlab.groupProtectedEnvironment.GroupProtectedEnvironment.isTerraformResource"></a>

```typescript
import { groupProtectedEnvironment } from '@cdktf/provider-gitlab'

groupProtectedEnvironment.GroupProtectedEnvironment.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-gitlab.groupProtectedEnvironment.GroupProtectedEnvironment.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-gitlab.groupProtectedEnvironment.GroupProtectedEnvironment.generateConfigForImport"></a>

```typescript
import { groupProtectedEnvironment } from '@cdktf/provider-gitlab'

groupProtectedEnvironment.GroupProtectedEnvironment.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a GroupProtectedEnvironment resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-gitlab.groupProtectedEnvironment.GroupProtectedEnvironment.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-gitlab.groupProtectedEnvironment.GroupProtectedEnvironment.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the GroupProtectedEnvironment to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-gitlab.groupProtectedEnvironment.GroupProtectedEnvironment.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing GroupProtectedEnvironment that should be imported.

Refer to the {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.7.0/docs/resources/group_protected_environment#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-gitlab.groupProtectedEnvironment.GroupProtectedEnvironment.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the GroupProtectedEnvironment to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.groupProtectedEnvironment.GroupProtectedEnvironment.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-gitlab.groupProtectedEnvironment.GroupProtectedEnvironment.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupProtectedEnvironment.GroupProtectedEnvironment.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupProtectedEnvironment.GroupProtectedEnvironment.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupProtectedEnvironment.GroupProtectedEnvironment.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupProtectedEnvironment.GroupProtectedEnvironment.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupProtectedEnvironment.GroupProtectedEnvironment.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupProtectedEnvironment.GroupProtectedEnvironment.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupProtectedEnvironment.GroupProtectedEnvironment.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupProtectedEnvironment.GroupProtectedEnvironment.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupProtectedEnvironment.GroupProtectedEnvironment.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupProtectedEnvironment.GroupProtectedEnvironment.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupProtectedEnvironment.GroupProtectedEnvironment.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupProtectedEnvironment.GroupProtectedEnvironment.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupProtectedEnvironment.GroupProtectedEnvironment.property.approvalRules">approvalRules</a></code> | <code><a href="#@cdktf/provider-gitlab.groupProtectedEnvironment.GroupProtectedEnvironmentApprovalRulesList">GroupProtectedEnvironmentApprovalRulesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupProtectedEnvironment.GroupProtectedEnvironment.property.deployAccessLevels">deployAccessLevels</a></code> | <code><a href="#@cdktf/provider-gitlab.groupProtectedEnvironment.GroupProtectedEnvironmentDeployAccessLevelsList">GroupProtectedEnvironmentDeployAccessLevelsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupProtectedEnvironment.GroupProtectedEnvironment.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupProtectedEnvironment.GroupProtectedEnvironment.property.approvalRulesInput">approvalRulesInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-gitlab.groupProtectedEnvironment.GroupProtectedEnvironmentApprovalRules">GroupProtectedEnvironmentApprovalRules</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupProtectedEnvironment.GroupProtectedEnvironment.property.deployAccessLevelsInput">deployAccessLevelsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-gitlab.groupProtectedEnvironment.GroupProtectedEnvironmentDeployAccessLevels">GroupProtectedEnvironmentDeployAccessLevels</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupProtectedEnvironment.GroupProtectedEnvironment.property.environmentInput">environmentInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupProtectedEnvironment.GroupProtectedEnvironment.property.groupInput">groupInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupProtectedEnvironment.GroupProtectedEnvironment.property.environment">environment</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupProtectedEnvironment.GroupProtectedEnvironment.property.group">group</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-gitlab.groupProtectedEnvironment.GroupProtectedEnvironment.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-gitlab.groupProtectedEnvironment.GroupProtectedEnvironment.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-gitlab.groupProtectedEnvironment.GroupProtectedEnvironment.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-gitlab.groupProtectedEnvironment.GroupProtectedEnvironment.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-gitlab.groupProtectedEnvironment.GroupProtectedEnvironment.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-gitlab.groupProtectedEnvironment.GroupProtectedEnvironment.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-gitlab.groupProtectedEnvironment.GroupProtectedEnvironment.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-gitlab.groupProtectedEnvironment.GroupProtectedEnvironment.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-gitlab.groupProtectedEnvironment.GroupProtectedEnvironment.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-gitlab.groupProtectedEnvironment.GroupProtectedEnvironment.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-gitlab.groupProtectedEnvironment.GroupProtectedEnvironment.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-gitlab.groupProtectedEnvironment.GroupProtectedEnvironment.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-gitlab.groupProtectedEnvironment.GroupProtectedEnvironment.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-gitlab.groupProtectedEnvironment.GroupProtectedEnvironment.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `approvalRules`<sup>Required</sup> <a name="approvalRules" id="@cdktf/provider-gitlab.groupProtectedEnvironment.GroupProtectedEnvironment.property.approvalRules"></a>

```typescript
public readonly approvalRules: GroupProtectedEnvironmentApprovalRulesList;
```

- *Type:* <a href="#@cdktf/provider-gitlab.groupProtectedEnvironment.GroupProtectedEnvironmentApprovalRulesList">GroupProtectedEnvironmentApprovalRulesList</a>

---

##### `deployAccessLevels`<sup>Required</sup> <a name="deployAccessLevels" id="@cdktf/provider-gitlab.groupProtectedEnvironment.GroupProtectedEnvironment.property.deployAccessLevels"></a>

```typescript
public readonly deployAccessLevels: GroupProtectedEnvironmentDeployAccessLevelsList;
```

- *Type:* <a href="#@cdktf/provider-gitlab.groupProtectedEnvironment.GroupProtectedEnvironmentDeployAccessLevelsList">GroupProtectedEnvironmentDeployAccessLevelsList</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-gitlab.groupProtectedEnvironment.GroupProtectedEnvironment.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `approvalRulesInput`<sup>Optional</sup> <a name="approvalRulesInput" id="@cdktf/provider-gitlab.groupProtectedEnvironment.GroupProtectedEnvironment.property.approvalRulesInput"></a>

```typescript
public readonly approvalRulesInput: IResolvable | GroupProtectedEnvironmentApprovalRules[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-gitlab.groupProtectedEnvironment.GroupProtectedEnvironmentApprovalRules">GroupProtectedEnvironmentApprovalRules</a>[]

---

##### `deployAccessLevelsInput`<sup>Optional</sup> <a name="deployAccessLevelsInput" id="@cdktf/provider-gitlab.groupProtectedEnvironment.GroupProtectedEnvironment.property.deployAccessLevelsInput"></a>

```typescript
public readonly deployAccessLevelsInput: IResolvable | GroupProtectedEnvironmentDeployAccessLevels[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-gitlab.groupProtectedEnvironment.GroupProtectedEnvironmentDeployAccessLevels">GroupProtectedEnvironmentDeployAccessLevels</a>[]

---

##### `environmentInput`<sup>Optional</sup> <a name="environmentInput" id="@cdktf/provider-gitlab.groupProtectedEnvironment.GroupProtectedEnvironment.property.environmentInput"></a>

```typescript
public readonly environmentInput: string;
```

- *Type:* string

---

##### `groupInput`<sup>Optional</sup> <a name="groupInput" id="@cdktf/provider-gitlab.groupProtectedEnvironment.GroupProtectedEnvironment.property.groupInput"></a>

```typescript
public readonly groupInput: string;
```

- *Type:* string

---

##### `environment`<sup>Required</sup> <a name="environment" id="@cdktf/provider-gitlab.groupProtectedEnvironment.GroupProtectedEnvironment.property.environment"></a>

```typescript
public readonly environment: string;
```

- *Type:* string

---

##### `group`<sup>Required</sup> <a name="group" id="@cdktf/provider-gitlab.groupProtectedEnvironment.GroupProtectedEnvironment.property.group"></a>

```typescript
public readonly group: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.groupProtectedEnvironment.GroupProtectedEnvironment.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-gitlab.groupProtectedEnvironment.GroupProtectedEnvironment.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### GroupProtectedEnvironmentApprovalRules <a name="GroupProtectedEnvironmentApprovalRules" id="@cdktf/provider-gitlab.groupProtectedEnvironment.GroupProtectedEnvironmentApprovalRules"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-gitlab.groupProtectedEnvironment.GroupProtectedEnvironmentApprovalRules.Initializer"></a>

```typescript
import { groupProtectedEnvironment } from '@cdktf/provider-gitlab'

const groupProtectedEnvironmentApprovalRules: groupProtectedEnvironment.GroupProtectedEnvironmentApprovalRules = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.groupProtectedEnvironment.GroupProtectedEnvironmentApprovalRules.property.accessLevel">accessLevel</a></code> | <code>string</code> | Levels of access allowed to approve a deployment to this protected environment. |
| <code><a href="#@cdktf/provider-gitlab.groupProtectedEnvironment.GroupProtectedEnvironmentApprovalRules.property.groupId">groupId</a></code> | <code>number</code> | The ID of the group allowed to approve a deployment to this protected environment. |
| <code><a href="#@cdktf/provider-gitlab.groupProtectedEnvironment.GroupProtectedEnvironmentApprovalRules.property.groupInheritanceType">groupInheritanceType</a></code> | <code>number</code> | Group inheritance allows access rules to take inherited group membership into account. |
| <code><a href="#@cdktf/provider-gitlab.groupProtectedEnvironment.GroupProtectedEnvironmentApprovalRules.property.requiredApprovals">requiredApprovals</a></code> | <code>number</code> | The number of approval required to allow deployment to this protected environment. This is mutually exclusive with user_id. |
| <code><a href="#@cdktf/provider-gitlab.groupProtectedEnvironment.GroupProtectedEnvironmentApprovalRules.property.userId">userId</a></code> | <code>number</code> | The ID of the user allowed to approve a deployment to this protected environment. |

---

##### `accessLevel`<sup>Optional</sup> <a name="accessLevel" id="@cdktf/provider-gitlab.groupProtectedEnvironment.GroupProtectedEnvironmentApprovalRules.property.accessLevel"></a>

```typescript
public readonly accessLevel: string;
```

- *Type:* string

Levels of access allowed to approve a deployment to this protected environment.

Mutually exclusive with `user_id` and `group_id`. Valid values are `developer`, `maintainer`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.7.0/docs/resources/group_protected_environment#access_level GroupProtectedEnvironment#access_level}

---

##### `groupId`<sup>Optional</sup> <a name="groupId" id="@cdktf/provider-gitlab.groupProtectedEnvironment.GroupProtectedEnvironmentApprovalRules.property.groupId"></a>

```typescript
public readonly groupId: number;
```

- *Type:* number

The ID of the group allowed to approve a deployment to this protected environment.

TThe group must be a sub-group under the given group. Mutually exclusive with `access_level` and `user_id`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.7.0/docs/resources/group_protected_environment#group_id GroupProtectedEnvironment#group_id}

---

##### `groupInheritanceType`<sup>Optional</sup> <a name="groupInheritanceType" id="@cdktf/provider-gitlab.groupProtectedEnvironment.GroupProtectedEnvironmentApprovalRules.property.groupInheritanceType"></a>

```typescript
public readonly groupInheritanceType: number;
```

- *Type:* number

Group inheritance allows access rules to take inherited group membership into account.

Valid values are `0`, `1`. `0` => Direct group membership only, `1` => All inherited groups. Default: `0`

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.7.0/docs/resources/group_protected_environment#group_inheritance_type GroupProtectedEnvironment#group_inheritance_type}

---

##### `requiredApprovals`<sup>Optional</sup> <a name="requiredApprovals" id="@cdktf/provider-gitlab.groupProtectedEnvironment.GroupProtectedEnvironmentApprovalRules.property.requiredApprovals"></a>

```typescript
public readonly requiredApprovals: number;
```

- *Type:* number

The number of approval required to allow deployment to this protected environment. This is mutually exclusive with user_id.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.7.0/docs/resources/group_protected_environment#required_approvals GroupProtectedEnvironment#required_approvals}

---

##### `userId`<sup>Optional</sup> <a name="userId" id="@cdktf/provider-gitlab.groupProtectedEnvironment.GroupProtectedEnvironmentApprovalRules.property.userId"></a>

```typescript
public readonly userId: number;
```

- *Type:* number

The ID of the user allowed to approve a deployment to this protected environment.

The user must be a member of the group with Maintainer role or higher. Mutually exclusive with `access_level` and `group_id`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.7.0/docs/resources/group_protected_environment#user_id GroupProtectedEnvironment#user_id}

---

### GroupProtectedEnvironmentConfig <a name="GroupProtectedEnvironmentConfig" id="@cdktf/provider-gitlab.groupProtectedEnvironment.GroupProtectedEnvironmentConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-gitlab.groupProtectedEnvironment.GroupProtectedEnvironmentConfig.Initializer"></a>

```typescript
import { groupProtectedEnvironment } from '@cdktf/provider-gitlab'

const groupProtectedEnvironmentConfig: groupProtectedEnvironment.GroupProtectedEnvironmentConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.groupProtectedEnvironment.GroupProtectedEnvironmentConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupProtectedEnvironment.GroupProtectedEnvironmentConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupProtectedEnvironment.GroupProtectedEnvironmentConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupProtectedEnvironment.GroupProtectedEnvironmentConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupProtectedEnvironment.GroupProtectedEnvironmentConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupProtectedEnvironment.GroupProtectedEnvironmentConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupProtectedEnvironment.GroupProtectedEnvironmentConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupProtectedEnvironment.GroupProtectedEnvironmentConfig.property.deployAccessLevels">deployAccessLevels</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-gitlab.groupProtectedEnvironment.GroupProtectedEnvironmentDeployAccessLevels">GroupProtectedEnvironmentDeployAccessLevels</a>[]</code> | Array of access levels allowed to deploy, with each described by a hash. |
| <code><a href="#@cdktf/provider-gitlab.groupProtectedEnvironment.GroupProtectedEnvironmentConfig.property.environment">environment</a></code> | <code>string</code> | The deployment tier of the environment.  Valid values are `production`, `staging`, `testing`, `development`, `other`. |
| <code><a href="#@cdktf/provider-gitlab.groupProtectedEnvironment.GroupProtectedEnvironmentConfig.property.group">group</a></code> | <code>string</code> | The ID or full path of the group which the protected environment is created against. |
| <code><a href="#@cdktf/provider-gitlab.groupProtectedEnvironment.GroupProtectedEnvironmentConfig.property.approvalRules">approvalRules</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-gitlab.groupProtectedEnvironment.GroupProtectedEnvironmentApprovalRules">GroupProtectedEnvironmentApprovalRules</a>[]</code> | Array of approval rules to deploy, with each described by a hash. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-gitlab.groupProtectedEnvironment.GroupProtectedEnvironmentConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-gitlab.groupProtectedEnvironment.GroupProtectedEnvironmentConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-gitlab.groupProtectedEnvironment.GroupProtectedEnvironmentConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-gitlab.groupProtectedEnvironment.GroupProtectedEnvironmentConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-gitlab.groupProtectedEnvironment.GroupProtectedEnvironmentConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-gitlab.groupProtectedEnvironment.GroupProtectedEnvironmentConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-gitlab.groupProtectedEnvironment.GroupProtectedEnvironmentConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `deployAccessLevels`<sup>Required</sup> <a name="deployAccessLevels" id="@cdktf/provider-gitlab.groupProtectedEnvironment.GroupProtectedEnvironmentConfig.property.deployAccessLevels"></a>

```typescript
public readonly deployAccessLevels: IResolvable | GroupProtectedEnvironmentDeployAccessLevels[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-gitlab.groupProtectedEnvironment.GroupProtectedEnvironmentDeployAccessLevels">GroupProtectedEnvironmentDeployAccessLevels</a>[]

Array of access levels allowed to deploy, with each described by a hash.

Elements in the `deploy_access_levels` should be one of `user_id`, `group_id` or `access_level`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.7.0/docs/resources/group_protected_environment#deploy_access_levels GroupProtectedEnvironment#deploy_access_levels}

---

##### `environment`<sup>Required</sup> <a name="environment" id="@cdktf/provider-gitlab.groupProtectedEnvironment.GroupProtectedEnvironmentConfig.property.environment"></a>

```typescript
public readonly environment: string;
```

- *Type:* string

The deployment tier of the environment.  Valid values are `production`, `staging`, `testing`, `development`, `other`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.7.0/docs/resources/group_protected_environment#environment GroupProtectedEnvironment#environment}

---

##### `group`<sup>Required</sup> <a name="group" id="@cdktf/provider-gitlab.groupProtectedEnvironment.GroupProtectedEnvironmentConfig.property.group"></a>

```typescript
public readonly group: string;
```

- *Type:* string

The ID or full path of the group which the protected environment is created against.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.7.0/docs/resources/group_protected_environment#group GroupProtectedEnvironment#group}

---

##### `approvalRules`<sup>Optional</sup> <a name="approvalRules" id="@cdktf/provider-gitlab.groupProtectedEnvironment.GroupProtectedEnvironmentConfig.property.approvalRules"></a>

```typescript
public readonly approvalRules: IResolvable | GroupProtectedEnvironmentApprovalRules[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-gitlab.groupProtectedEnvironment.GroupProtectedEnvironmentApprovalRules">GroupProtectedEnvironmentApprovalRules</a>[]

Array of approval rules to deploy, with each described by a hash.

Elements in the `approval_rules` should be one of `user_id`, `group_id` or `access_level`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.7.0/docs/resources/group_protected_environment#approval_rules GroupProtectedEnvironment#approval_rules}

---

### GroupProtectedEnvironmentDeployAccessLevels <a name="GroupProtectedEnvironmentDeployAccessLevels" id="@cdktf/provider-gitlab.groupProtectedEnvironment.GroupProtectedEnvironmentDeployAccessLevels"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-gitlab.groupProtectedEnvironment.GroupProtectedEnvironmentDeployAccessLevels.Initializer"></a>

```typescript
import { groupProtectedEnvironment } from '@cdktf/provider-gitlab'

const groupProtectedEnvironmentDeployAccessLevels: groupProtectedEnvironment.GroupProtectedEnvironmentDeployAccessLevels = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.groupProtectedEnvironment.GroupProtectedEnvironmentDeployAccessLevels.property.accessLevel">accessLevel</a></code> | <code>string</code> | Levels of access required to deploy to this protected environment. |
| <code><a href="#@cdktf/provider-gitlab.groupProtectedEnvironment.GroupProtectedEnvironmentDeployAccessLevels.property.groupId">groupId</a></code> | <code>number</code> | The ID of the group allowed to deploy to this protected environment. |
| <code><a href="#@cdktf/provider-gitlab.groupProtectedEnvironment.GroupProtectedEnvironmentDeployAccessLevels.property.groupInheritanceType">groupInheritanceType</a></code> | <code>number</code> | Group inheritance allows deploy access levels to take inherited group membership into account. |
| <code><a href="#@cdktf/provider-gitlab.groupProtectedEnvironment.GroupProtectedEnvironmentDeployAccessLevels.property.userId">userId</a></code> | <code>number</code> | The ID of the user allowed to deploy to this protected environment. |

---

##### `accessLevel`<sup>Optional</sup> <a name="accessLevel" id="@cdktf/provider-gitlab.groupProtectedEnvironment.GroupProtectedEnvironmentDeployAccessLevels.property.accessLevel"></a>

```typescript
public readonly accessLevel: string;
```

- *Type:* string

Levels of access required to deploy to this protected environment.

Mutually exclusive with `user_id` and `group_id`. Valid values are `developer`, `maintainer`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.7.0/docs/resources/group_protected_environment#access_level GroupProtectedEnvironment#access_level}

---

##### `groupId`<sup>Optional</sup> <a name="groupId" id="@cdktf/provider-gitlab.groupProtectedEnvironment.GroupProtectedEnvironmentDeployAccessLevels.property.groupId"></a>

```typescript
public readonly groupId: number;
```

- *Type:* number

The ID of the group allowed to deploy to this protected environment.

The group must be a sub-group under the given group. Mutually exclusive with `access_level` and `user_id`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.7.0/docs/resources/group_protected_environment#group_id GroupProtectedEnvironment#group_id}

---

##### `groupInheritanceType`<sup>Optional</sup> <a name="groupInheritanceType" id="@cdktf/provider-gitlab.groupProtectedEnvironment.GroupProtectedEnvironmentDeployAccessLevels.property.groupInheritanceType"></a>

```typescript
public readonly groupInheritanceType: number;
```

- *Type:* number

Group inheritance allows deploy access levels to take inherited group membership into account.

Valid values are `0`, `1`. `0` => Direct group membership only, `1` => All inherited groups. Default: `0`

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.7.0/docs/resources/group_protected_environment#group_inheritance_type GroupProtectedEnvironment#group_inheritance_type}

---

##### `userId`<sup>Optional</sup> <a name="userId" id="@cdktf/provider-gitlab.groupProtectedEnvironment.GroupProtectedEnvironmentDeployAccessLevels.property.userId"></a>

```typescript
public readonly userId: number;
```

- *Type:* number

The ID of the user allowed to deploy to this protected environment.

The user must be a member of the group with Maintainer role or higher. Mutually exclusive with `access_level` and `group_id`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.7.0/docs/resources/group_protected_environment#user_id GroupProtectedEnvironment#user_id}

---

## Classes <a name="Classes" id="Classes"></a>

### GroupProtectedEnvironmentApprovalRulesList <a name="GroupProtectedEnvironmentApprovalRulesList" id="@cdktf/provider-gitlab.groupProtectedEnvironment.GroupProtectedEnvironmentApprovalRulesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-gitlab.groupProtectedEnvironment.GroupProtectedEnvironmentApprovalRulesList.Initializer"></a>

```typescript
import { groupProtectedEnvironment } from '@cdktf/provider-gitlab'

new groupProtectedEnvironment.GroupProtectedEnvironmentApprovalRulesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.groupProtectedEnvironment.GroupProtectedEnvironmentApprovalRulesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-gitlab.groupProtectedEnvironment.GroupProtectedEnvironmentApprovalRulesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-gitlab.groupProtectedEnvironment.GroupProtectedEnvironmentApprovalRulesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-gitlab.groupProtectedEnvironment.GroupProtectedEnvironmentApprovalRulesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.groupProtectedEnvironment.GroupProtectedEnvironmentApprovalRulesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-gitlab.groupProtectedEnvironment.GroupProtectedEnvironmentApprovalRulesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-gitlab.groupProtectedEnvironment.GroupProtectedEnvironmentApprovalRulesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-gitlab.groupProtectedEnvironment.GroupProtectedEnvironmentApprovalRulesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupProtectedEnvironment.GroupProtectedEnvironmentApprovalRulesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-gitlab.groupProtectedEnvironment.GroupProtectedEnvironmentApprovalRulesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-gitlab.groupProtectedEnvironment.GroupProtectedEnvironmentApprovalRulesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-gitlab.groupProtectedEnvironment.GroupProtectedEnvironmentApprovalRulesList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-gitlab.groupProtectedEnvironment.GroupProtectedEnvironmentApprovalRulesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-gitlab.groupProtectedEnvironment.GroupProtectedEnvironmentApprovalRulesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-gitlab.groupProtectedEnvironment.GroupProtectedEnvironmentApprovalRulesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-gitlab.groupProtectedEnvironment.GroupProtectedEnvironmentApprovalRulesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-gitlab.groupProtectedEnvironment.GroupProtectedEnvironmentApprovalRulesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-gitlab.groupProtectedEnvironment.GroupProtectedEnvironmentApprovalRulesList.get"></a>

```typescript
public get(index: number): GroupProtectedEnvironmentApprovalRulesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-gitlab.groupProtectedEnvironment.GroupProtectedEnvironmentApprovalRulesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.groupProtectedEnvironment.GroupProtectedEnvironmentApprovalRulesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-gitlab.groupProtectedEnvironment.GroupProtectedEnvironmentApprovalRulesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupProtectedEnvironment.GroupProtectedEnvironmentApprovalRulesList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-gitlab.groupProtectedEnvironment.GroupProtectedEnvironmentApprovalRules">GroupProtectedEnvironmentApprovalRules</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-gitlab.groupProtectedEnvironment.GroupProtectedEnvironmentApprovalRulesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-gitlab.groupProtectedEnvironment.GroupProtectedEnvironmentApprovalRulesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-gitlab.groupProtectedEnvironment.GroupProtectedEnvironmentApprovalRulesList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GroupProtectedEnvironmentApprovalRules[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-gitlab.groupProtectedEnvironment.GroupProtectedEnvironmentApprovalRules">GroupProtectedEnvironmentApprovalRules</a>[]

---


### GroupProtectedEnvironmentApprovalRulesOutputReference <a name="GroupProtectedEnvironmentApprovalRulesOutputReference" id="@cdktf/provider-gitlab.groupProtectedEnvironment.GroupProtectedEnvironmentApprovalRulesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-gitlab.groupProtectedEnvironment.GroupProtectedEnvironmentApprovalRulesOutputReference.Initializer"></a>

```typescript
import { groupProtectedEnvironment } from '@cdktf/provider-gitlab'

new groupProtectedEnvironment.GroupProtectedEnvironmentApprovalRulesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.groupProtectedEnvironment.GroupProtectedEnvironmentApprovalRulesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-gitlab.groupProtectedEnvironment.GroupProtectedEnvironmentApprovalRulesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-gitlab.groupProtectedEnvironment.GroupProtectedEnvironmentApprovalRulesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-gitlab.groupProtectedEnvironment.GroupProtectedEnvironmentApprovalRulesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-gitlab.groupProtectedEnvironment.GroupProtectedEnvironmentApprovalRulesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.groupProtectedEnvironment.GroupProtectedEnvironmentApprovalRulesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-gitlab.groupProtectedEnvironment.GroupProtectedEnvironmentApprovalRulesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-gitlab.groupProtectedEnvironment.GroupProtectedEnvironmentApprovalRulesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-gitlab.groupProtectedEnvironment.GroupProtectedEnvironmentApprovalRulesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupProtectedEnvironment.GroupProtectedEnvironmentApprovalRulesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupProtectedEnvironment.GroupProtectedEnvironmentApprovalRulesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupProtectedEnvironment.GroupProtectedEnvironmentApprovalRulesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupProtectedEnvironment.GroupProtectedEnvironmentApprovalRulesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupProtectedEnvironment.GroupProtectedEnvironmentApprovalRulesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupProtectedEnvironment.GroupProtectedEnvironmentApprovalRulesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupProtectedEnvironment.GroupProtectedEnvironmentApprovalRulesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupProtectedEnvironment.GroupProtectedEnvironmentApprovalRulesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupProtectedEnvironment.GroupProtectedEnvironmentApprovalRulesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupProtectedEnvironment.GroupProtectedEnvironmentApprovalRulesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupProtectedEnvironment.GroupProtectedEnvironmentApprovalRulesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-gitlab.groupProtectedEnvironment.GroupProtectedEnvironmentApprovalRulesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-gitlab.groupProtectedEnvironment.GroupProtectedEnvironmentApprovalRulesOutputReference.resetAccessLevel">resetAccessLevel</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupProtectedEnvironment.GroupProtectedEnvironmentApprovalRulesOutputReference.resetGroupId">resetGroupId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupProtectedEnvironment.GroupProtectedEnvironmentApprovalRulesOutputReference.resetGroupInheritanceType">resetGroupInheritanceType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupProtectedEnvironment.GroupProtectedEnvironmentApprovalRulesOutputReference.resetRequiredApprovals">resetRequiredApprovals</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupProtectedEnvironment.GroupProtectedEnvironmentApprovalRulesOutputReference.resetUserId">resetUserId</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-gitlab.groupProtectedEnvironment.GroupProtectedEnvironmentApprovalRulesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-gitlab.groupProtectedEnvironment.GroupProtectedEnvironmentApprovalRulesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.groupProtectedEnvironment.GroupProtectedEnvironmentApprovalRulesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-gitlab.groupProtectedEnvironment.GroupProtectedEnvironmentApprovalRulesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.groupProtectedEnvironment.GroupProtectedEnvironmentApprovalRulesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-gitlab.groupProtectedEnvironment.GroupProtectedEnvironmentApprovalRulesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.groupProtectedEnvironment.GroupProtectedEnvironmentApprovalRulesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-gitlab.groupProtectedEnvironment.GroupProtectedEnvironmentApprovalRulesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.groupProtectedEnvironment.GroupProtectedEnvironmentApprovalRulesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-gitlab.groupProtectedEnvironment.GroupProtectedEnvironmentApprovalRulesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.groupProtectedEnvironment.GroupProtectedEnvironmentApprovalRulesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-gitlab.groupProtectedEnvironment.GroupProtectedEnvironmentApprovalRulesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.groupProtectedEnvironment.GroupProtectedEnvironmentApprovalRulesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-gitlab.groupProtectedEnvironment.GroupProtectedEnvironmentApprovalRulesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.groupProtectedEnvironment.GroupProtectedEnvironmentApprovalRulesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-gitlab.groupProtectedEnvironment.GroupProtectedEnvironmentApprovalRulesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.groupProtectedEnvironment.GroupProtectedEnvironmentApprovalRulesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-gitlab.groupProtectedEnvironment.GroupProtectedEnvironmentApprovalRulesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.groupProtectedEnvironment.GroupProtectedEnvironmentApprovalRulesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-gitlab.groupProtectedEnvironment.GroupProtectedEnvironmentApprovalRulesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-gitlab.groupProtectedEnvironment.GroupProtectedEnvironmentApprovalRulesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-gitlab.groupProtectedEnvironment.GroupProtectedEnvironmentApprovalRulesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-gitlab.groupProtectedEnvironment.GroupProtectedEnvironmentApprovalRulesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-gitlab.groupProtectedEnvironment.GroupProtectedEnvironmentApprovalRulesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAccessLevel` <a name="resetAccessLevel" id="@cdktf/provider-gitlab.groupProtectedEnvironment.GroupProtectedEnvironmentApprovalRulesOutputReference.resetAccessLevel"></a>

```typescript
public resetAccessLevel(): void
```

##### `resetGroupId` <a name="resetGroupId" id="@cdktf/provider-gitlab.groupProtectedEnvironment.GroupProtectedEnvironmentApprovalRulesOutputReference.resetGroupId"></a>

```typescript
public resetGroupId(): void
```

##### `resetGroupInheritanceType` <a name="resetGroupInheritanceType" id="@cdktf/provider-gitlab.groupProtectedEnvironment.GroupProtectedEnvironmentApprovalRulesOutputReference.resetGroupInheritanceType"></a>

```typescript
public resetGroupInheritanceType(): void
```

##### `resetRequiredApprovals` <a name="resetRequiredApprovals" id="@cdktf/provider-gitlab.groupProtectedEnvironment.GroupProtectedEnvironmentApprovalRulesOutputReference.resetRequiredApprovals"></a>

```typescript
public resetRequiredApprovals(): void
```

##### `resetUserId` <a name="resetUserId" id="@cdktf/provider-gitlab.groupProtectedEnvironment.GroupProtectedEnvironmentApprovalRulesOutputReference.resetUserId"></a>

```typescript
public resetUserId(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.groupProtectedEnvironment.GroupProtectedEnvironmentApprovalRulesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-gitlab.groupProtectedEnvironment.GroupProtectedEnvironmentApprovalRulesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupProtectedEnvironment.GroupProtectedEnvironmentApprovalRulesOutputReference.property.accessLevelDescription">accessLevelDescription</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupProtectedEnvironment.GroupProtectedEnvironmentApprovalRulesOutputReference.property.id">id</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupProtectedEnvironment.GroupProtectedEnvironmentApprovalRulesOutputReference.property.accessLevelInput">accessLevelInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupProtectedEnvironment.GroupProtectedEnvironmentApprovalRulesOutputReference.property.groupIdInput">groupIdInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupProtectedEnvironment.GroupProtectedEnvironmentApprovalRulesOutputReference.property.groupInheritanceTypeInput">groupInheritanceTypeInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupProtectedEnvironment.GroupProtectedEnvironmentApprovalRulesOutputReference.property.requiredApprovalsInput">requiredApprovalsInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupProtectedEnvironment.GroupProtectedEnvironmentApprovalRulesOutputReference.property.userIdInput">userIdInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupProtectedEnvironment.GroupProtectedEnvironmentApprovalRulesOutputReference.property.accessLevel">accessLevel</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupProtectedEnvironment.GroupProtectedEnvironmentApprovalRulesOutputReference.property.groupId">groupId</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupProtectedEnvironment.GroupProtectedEnvironmentApprovalRulesOutputReference.property.groupInheritanceType">groupInheritanceType</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupProtectedEnvironment.GroupProtectedEnvironmentApprovalRulesOutputReference.property.requiredApprovals">requiredApprovals</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupProtectedEnvironment.GroupProtectedEnvironmentApprovalRulesOutputReference.property.userId">userId</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupProtectedEnvironment.GroupProtectedEnvironmentApprovalRulesOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-gitlab.groupProtectedEnvironment.GroupProtectedEnvironmentApprovalRules">GroupProtectedEnvironmentApprovalRules</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-gitlab.groupProtectedEnvironment.GroupProtectedEnvironmentApprovalRulesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-gitlab.groupProtectedEnvironment.GroupProtectedEnvironmentApprovalRulesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `accessLevelDescription`<sup>Required</sup> <a name="accessLevelDescription" id="@cdktf/provider-gitlab.groupProtectedEnvironment.GroupProtectedEnvironmentApprovalRulesOutputReference.property.accessLevelDescription"></a>

```typescript
public readonly accessLevelDescription: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-gitlab.groupProtectedEnvironment.GroupProtectedEnvironmentApprovalRulesOutputReference.property.id"></a>

```typescript
public readonly id: number;
```

- *Type:* number

---

##### `accessLevelInput`<sup>Optional</sup> <a name="accessLevelInput" id="@cdktf/provider-gitlab.groupProtectedEnvironment.GroupProtectedEnvironmentApprovalRulesOutputReference.property.accessLevelInput"></a>

```typescript
public readonly accessLevelInput: string;
```

- *Type:* string

---

##### `groupIdInput`<sup>Optional</sup> <a name="groupIdInput" id="@cdktf/provider-gitlab.groupProtectedEnvironment.GroupProtectedEnvironmentApprovalRulesOutputReference.property.groupIdInput"></a>

```typescript
public readonly groupIdInput: number;
```

- *Type:* number

---

##### `groupInheritanceTypeInput`<sup>Optional</sup> <a name="groupInheritanceTypeInput" id="@cdktf/provider-gitlab.groupProtectedEnvironment.GroupProtectedEnvironmentApprovalRulesOutputReference.property.groupInheritanceTypeInput"></a>

```typescript
public readonly groupInheritanceTypeInput: number;
```

- *Type:* number

---

##### `requiredApprovalsInput`<sup>Optional</sup> <a name="requiredApprovalsInput" id="@cdktf/provider-gitlab.groupProtectedEnvironment.GroupProtectedEnvironmentApprovalRulesOutputReference.property.requiredApprovalsInput"></a>

```typescript
public readonly requiredApprovalsInput: number;
```

- *Type:* number

---

##### `userIdInput`<sup>Optional</sup> <a name="userIdInput" id="@cdktf/provider-gitlab.groupProtectedEnvironment.GroupProtectedEnvironmentApprovalRulesOutputReference.property.userIdInput"></a>

```typescript
public readonly userIdInput: number;
```

- *Type:* number

---

##### `accessLevel`<sup>Required</sup> <a name="accessLevel" id="@cdktf/provider-gitlab.groupProtectedEnvironment.GroupProtectedEnvironmentApprovalRulesOutputReference.property.accessLevel"></a>

```typescript
public readonly accessLevel: string;
```

- *Type:* string

---

##### `groupId`<sup>Required</sup> <a name="groupId" id="@cdktf/provider-gitlab.groupProtectedEnvironment.GroupProtectedEnvironmentApprovalRulesOutputReference.property.groupId"></a>

```typescript
public readonly groupId: number;
```

- *Type:* number

---

##### `groupInheritanceType`<sup>Required</sup> <a name="groupInheritanceType" id="@cdktf/provider-gitlab.groupProtectedEnvironment.GroupProtectedEnvironmentApprovalRulesOutputReference.property.groupInheritanceType"></a>

```typescript
public readonly groupInheritanceType: number;
```

- *Type:* number

---

##### `requiredApprovals`<sup>Required</sup> <a name="requiredApprovals" id="@cdktf/provider-gitlab.groupProtectedEnvironment.GroupProtectedEnvironmentApprovalRulesOutputReference.property.requiredApprovals"></a>

```typescript
public readonly requiredApprovals: number;
```

- *Type:* number

---

##### `userId`<sup>Required</sup> <a name="userId" id="@cdktf/provider-gitlab.groupProtectedEnvironment.GroupProtectedEnvironmentApprovalRulesOutputReference.property.userId"></a>

```typescript
public readonly userId: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-gitlab.groupProtectedEnvironment.GroupProtectedEnvironmentApprovalRulesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GroupProtectedEnvironmentApprovalRules;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-gitlab.groupProtectedEnvironment.GroupProtectedEnvironmentApprovalRules">GroupProtectedEnvironmentApprovalRules</a>

---


### GroupProtectedEnvironmentDeployAccessLevelsList <a name="GroupProtectedEnvironmentDeployAccessLevelsList" id="@cdktf/provider-gitlab.groupProtectedEnvironment.GroupProtectedEnvironmentDeployAccessLevelsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-gitlab.groupProtectedEnvironment.GroupProtectedEnvironmentDeployAccessLevelsList.Initializer"></a>

```typescript
import { groupProtectedEnvironment } from '@cdktf/provider-gitlab'

new groupProtectedEnvironment.GroupProtectedEnvironmentDeployAccessLevelsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.groupProtectedEnvironment.GroupProtectedEnvironmentDeployAccessLevelsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-gitlab.groupProtectedEnvironment.GroupProtectedEnvironmentDeployAccessLevelsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-gitlab.groupProtectedEnvironment.GroupProtectedEnvironmentDeployAccessLevelsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-gitlab.groupProtectedEnvironment.GroupProtectedEnvironmentDeployAccessLevelsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.groupProtectedEnvironment.GroupProtectedEnvironmentDeployAccessLevelsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-gitlab.groupProtectedEnvironment.GroupProtectedEnvironmentDeployAccessLevelsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-gitlab.groupProtectedEnvironment.GroupProtectedEnvironmentDeployAccessLevelsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-gitlab.groupProtectedEnvironment.GroupProtectedEnvironmentDeployAccessLevelsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupProtectedEnvironment.GroupProtectedEnvironmentDeployAccessLevelsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-gitlab.groupProtectedEnvironment.GroupProtectedEnvironmentDeployAccessLevelsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-gitlab.groupProtectedEnvironment.GroupProtectedEnvironmentDeployAccessLevelsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-gitlab.groupProtectedEnvironment.GroupProtectedEnvironmentDeployAccessLevelsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-gitlab.groupProtectedEnvironment.GroupProtectedEnvironmentDeployAccessLevelsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-gitlab.groupProtectedEnvironment.GroupProtectedEnvironmentDeployAccessLevelsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-gitlab.groupProtectedEnvironment.GroupProtectedEnvironmentDeployAccessLevelsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-gitlab.groupProtectedEnvironment.GroupProtectedEnvironmentDeployAccessLevelsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-gitlab.groupProtectedEnvironment.GroupProtectedEnvironmentDeployAccessLevelsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-gitlab.groupProtectedEnvironment.GroupProtectedEnvironmentDeployAccessLevelsList.get"></a>

```typescript
public get(index: number): GroupProtectedEnvironmentDeployAccessLevelsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-gitlab.groupProtectedEnvironment.GroupProtectedEnvironmentDeployAccessLevelsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.groupProtectedEnvironment.GroupProtectedEnvironmentDeployAccessLevelsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-gitlab.groupProtectedEnvironment.GroupProtectedEnvironmentDeployAccessLevelsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupProtectedEnvironment.GroupProtectedEnvironmentDeployAccessLevelsList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-gitlab.groupProtectedEnvironment.GroupProtectedEnvironmentDeployAccessLevels">GroupProtectedEnvironmentDeployAccessLevels</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-gitlab.groupProtectedEnvironment.GroupProtectedEnvironmentDeployAccessLevelsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-gitlab.groupProtectedEnvironment.GroupProtectedEnvironmentDeployAccessLevelsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-gitlab.groupProtectedEnvironment.GroupProtectedEnvironmentDeployAccessLevelsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GroupProtectedEnvironmentDeployAccessLevels[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-gitlab.groupProtectedEnvironment.GroupProtectedEnvironmentDeployAccessLevels">GroupProtectedEnvironmentDeployAccessLevels</a>[]

---


### GroupProtectedEnvironmentDeployAccessLevelsOutputReference <a name="GroupProtectedEnvironmentDeployAccessLevelsOutputReference" id="@cdktf/provider-gitlab.groupProtectedEnvironment.GroupProtectedEnvironmentDeployAccessLevelsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-gitlab.groupProtectedEnvironment.GroupProtectedEnvironmentDeployAccessLevelsOutputReference.Initializer"></a>

```typescript
import { groupProtectedEnvironment } from '@cdktf/provider-gitlab'

new groupProtectedEnvironment.GroupProtectedEnvironmentDeployAccessLevelsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.groupProtectedEnvironment.GroupProtectedEnvironmentDeployAccessLevelsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-gitlab.groupProtectedEnvironment.GroupProtectedEnvironmentDeployAccessLevelsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-gitlab.groupProtectedEnvironment.GroupProtectedEnvironmentDeployAccessLevelsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-gitlab.groupProtectedEnvironment.GroupProtectedEnvironmentDeployAccessLevelsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-gitlab.groupProtectedEnvironment.GroupProtectedEnvironmentDeployAccessLevelsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.groupProtectedEnvironment.GroupProtectedEnvironmentDeployAccessLevelsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-gitlab.groupProtectedEnvironment.GroupProtectedEnvironmentDeployAccessLevelsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-gitlab.groupProtectedEnvironment.GroupProtectedEnvironmentDeployAccessLevelsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-gitlab.groupProtectedEnvironment.GroupProtectedEnvironmentDeployAccessLevelsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupProtectedEnvironment.GroupProtectedEnvironmentDeployAccessLevelsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupProtectedEnvironment.GroupProtectedEnvironmentDeployAccessLevelsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupProtectedEnvironment.GroupProtectedEnvironmentDeployAccessLevelsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupProtectedEnvironment.GroupProtectedEnvironmentDeployAccessLevelsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupProtectedEnvironment.GroupProtectedEnvironmentDeployAccessLevelsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupProtectedEnvironment.GroupProtectedEnvironmentDeployAccessLevelsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupProtectedEnvironment.GroupProtectedEnvironmentDeployAccessLevelsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupProtectedEnvironment.GroupProtectedEnvironmentDeployAccessLevelsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupProtectedEnvironment.GroupProtectedEnvironmentDeployAccessLevelsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupProtectedEnvironment.GroupProtectedEnvironmentDeployAccessLevelsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupProtectedEnvironment.GroupProtectedEnvironmentDeployAccessLevelsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-gitlab.groupProtectedEnvironment.GroupProtectedEnvironmentDeployAccessLevelsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-gitlab.groupProtectedEnvironment.GroupProtectedEnvironmentDeployAccessLevelsOutputReference.resetAccessLevel">resetAccessLevel</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupProtectedEnvironment.GroupProtectedEnvironmentDeployAccessLevelsOutputReference.resetGroupId">resetGroupId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupProtectedEnvironment.GroupProtectedEnvironmentDeployAccessLevelsOutputReference.resetGroupInheritanceType">resetGroupInheritanceType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupProtectedEnvironment.GroupProtectedEnvironmentDeployAccessLevelsOutputReference.resetUserId">resetUserId</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-gitlab.groupProtectedEnvironment.GroupProtectedEnvironmentDeployAccessLevelsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-gitlab.groupProtectedEnvironment.GroupProtectedEnvironmentDeployAccessLevelsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.groupProtectedEnvironment.GroupProtectedEnvironmentDeployAccessLevelsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-gitlab.groupProtectedEnvironment.GroupProtectedEnvironmentDeployAccessLevelsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.groupProtectedEnvironment.GroupProtectedEnvironmentDeployAccessLevelsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-gitlab.groupProtectedEnvironment.GroupProtectedEnvironmentDeployAccessLevelsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.groupProtectedEnvironment.GroupProtectedEnvironmentDeployAccessLevelsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-gitlab.groupProtectedEnvironment.GroupProtectedEnvironmentDeployAccessLevelsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.groupProtectedEnvironment.GroupProtectedEnvironmentDeployAccessLevelsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-gitlab.groupProtectedEnvironment.GroupProtectedEnvironmentDeployAccessLevelsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.groupProtectedEnvironment.GroupProtectedEnvironmentDeployAccessLevelsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-gitlab.groupProtectedEnvironment.GroupProtectedEnvironmentDeployAccessLevelsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.groupProtectedEnvironment.GroupProtectedEnvironmentDeployAccessLevelsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-gitlab.groupProtectedEnvironment.GroupProtectedEnvironmentDeployAccessLevelsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.groupProtectedEnvironment.GroupProtectedEnvironmentDeployAccessLevelsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-gitlab.groupProtectedEnvironment.GroupProtectedEnvironmentDeployAccessLevelsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.groupProtectedEnvironment.GroupProtectedEnvironmentDeployAccessLevelsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-gitlab.groupProtectedEnvironment.GroupProtectedEnvironmentDeployAccessLevelsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.groupProtectedEnvironment.GroupProtectedEnvironmentDeployAccessLevelsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-gitlab.groupProtectedEnvironment.GroupProtectedEnvironmentDeployAccessLevelsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-gitlab.groupProtectedEnvironment.GroupProtectedEnvironmentDeployAccessLevelsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-gitlab.groupProtectedEnvironment.GroupProtectedEnvironmentDeployAccessLevelsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-gitlab.groupProtectedEnvironment.GroupProtectedEnvironmentDeployAccessLevelsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-gitlab.groupProtectedEnvironment.GroupProtectedEnvironmentDeployAccessLevelsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAccessLevel` <a name="resetAccessLevel" id="@cdktf/provider-gitlab.groupProtectedEnvironment.GroupProtectedEnvironmentDeployAccessLevelsOutputReference.resetAccessLevel"></a>

```typescript
public resetAccessLevel(): void
```

##### `resetGroupId` <a name="resetGroupId" id="@cdktf/provider-gitlab.groupProtectedEnvironment.GroupProtectedEnvironmentDeployAccessLevelsOutputReference.resetGroupId"></a>

```typescript
public resetGroupId(): void
```

##### `resetGroupInheritanceType` <a name="resetGroupInheritanceType" id="@cdktf/provider-gitlab.groupProtectedEnvironment.GroupProtectedEnvironmentDeployAccessLevelsOutputReference.resetGroupInheritanceType"></a>

```typescript
public resetGroupInheritanceType(): void
```

##### `resetUserId` <a name="resetUserId" id="@cdktf/provider-gitlab.groupProtectedEnvironment.GroupProtectedEnvironmentDeployAccessLevelsOutputReference.resetUserId"></a>

```typescript
public resetUserId(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.groupProtectedEnvironment.GroupProtectedEnvironmentDeployAccessLevelsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-gitlab.groupProtectedEnvironment.GroupProtectedEnvironmentDeployAccessLevelsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupProtectedEnvironment.GroupProtectedEnvironmentDeployAccessLevelsOutputReference.property.accessLevelDescription">accessLevelDescription</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupProtectedEnvironment.GroupProtectedEnvironmentDeployAccessLevelsOutputReference.property.id">id</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupProtectedEnvironment.GroupProtectedEnvironmentDeployAccessLevelsOutputReference.property.accessLevelInput">accessLevelInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupProtectedEnvironment.GroupProtectedEnvironmentDeployAccessLevelsOutputReference.property.groupIdInput">groupIdInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupProtectedEnvironment.GroupProtectedEnvironmentDeployAccessLevelsOutputReference.property.groupInheritanceTypeInput">groupInheritanceTypeInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupProtectedEnvironment.GroupProtectedEnvironmentDeployAccessLevelsOutputReference.property.userIdInput">userIdInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupProtectedEnvironment.GroupProtectedEnvironmentDeployAccessLevelsOutputReference.property.accessLevel">accessLevel</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupProtectedEnvironment.GroupProtectedEnvironmentDeployAccessLevelsOutputReference.property.groupId">groupId</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupProtectedEnvironment.GroupProtectedEnvironmentDeployAccessLevelsOutputReference.property.groupInheritanceType">groupInheritanceType</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupProtectedEnvironment.GroupProtectedEnvironmentDeployAccessLevelsOutputReference.property.userId">userId</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupProtectedEnvironment.GroupProtectedEnvironmentDeployAccessLevelsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-gitlab.groupProtectedEnvironment.GroupProtectedEnvironmentDeployAccessLevels">GroupProtectedEnvironmentDeployAccessLevels</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-gitlab.groupProtectedEnvironment.GroupProtectedEnvironmentDeployAccessLevelsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-gitlab.groupProtectedEnvironment.GroupProtectedEnvironmentDeployAccessLevelsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `accessLevelDescription`<sup>Required</sup> <a name="accessLevelDescription" id="@cdktf/provider-gitlab.groupProtectedEnvironment.GroupProtectedEnvironmentDeployAccessLevelsOutputReference.property.accessLevelDescription"></a>

```typescript
public readonly accessLevelDescription: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-gitlab.groupProtectedEnvironment.GroupProtectedEnvironmentDeployAccessLevelsOutputReference.property.id"></a>

```typescript
public readonly id: number;
```

- *Type:* number

---

##### `accessLevelInput`<sup>Optional</sup> <a name="accessLevelInput" id="@cdktf/provider-gitlab.groupProtectedEnvironment.GroupProtectedEnvironmentDeployAccessLevelsOutputReference.property.accessLevelInput"></a>

```typescript
public readonly accessLevelInput: string;
```

- *Type:* string

---

##### `groupIdInput`<sup>Optional</sup> <a name="groupIdInput" id="@cdktf/provider-gitlab.groupProtectedEnvironment.GroupProtectedEnvironmentDeployAccessLevelsOutputReference.property.groupIdInput"></a>

```typescript
public readonly groupIdInput: number;
```

- *Type:* number

---

##### `groupInheritanceTypeInput`<sup>Optional</sup> <a name="groupInheritanceTypeInput" id="@cdktf/provider-gitlab.groupProtectedEnvironment.GroupProtectedEnvironmentDeployAccessLevelsOutputReference.property.groupInheritanceTypeInput"></a>

```typescript
public readonly groupInheritanceTypeInput: number;
```

- *Type:* number

---

##### `userIdInput`<sup>Optional</sup> <a name="userIdInput" id="@cdktf/provider-gitlab.groupProtectedEnvironment.GroupProtectedEnvironmentDeployAccessLevelsOutputReference.property.userIdInput"></a>

```typescript
public readonly userIdInput: number;
```

- *Type:* number

---

##### `accessLevel`<sup>Required</sup> <a name="accessLevel" id="@cdktf/provider-gitlab.groupProtectedEnvironment.GroupProtectedEnvironmentDeployAccessLevelsOutputReference.property.accessLevel"></a>

```typescript
public readonly accessLevel: string;
```

- *Type:* string

---

##### `groupId`<sup>Required</sup> <a name="groupId" id="@cdktf/provider-gitlab.groupProtectedEnvironment.GroupProtectedEnvironmentDeployAccessLevelsOutputReference.property.groupId"></a>

```typescript
public readonly groupId: number;
```

- *Type:* number

---

##### `groupInheritanceType`<sup>Required</sup> <a name="groupInheritanceType" id="@cdktf/provider-gitlab.groupProtectedEnvironment.GroupProtectedEnvironmentDeployAccessLevelsOutputReference.property.groupInheritanceType"></a>

```typescript
public readonly groupInheritanceType: number;
```

- *Type:* number

---

##### `userId`<sup>Required</sup> <a name="userId" id="@cdktf/provider-gitlab.groupProtectedEnvironment.GroupProtectedEnvironmentDeployAccessLevelsOutputReference.property.userId"></a>

```typescript
public readonly userId: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-gitlab.groupProtectedEnvironment.GroupProtectedEnvironmentDeployAccessLevelsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GroupProtectedEnvironmentDeployAccessLevels;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-gitlab.groupProtectedEnvironment.GroupProtectedEnvironmentDeployAccessLevels">GroupProtectedEnvironmentDeployAccessLevels</a>

---



