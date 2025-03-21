# `groupMembership` Submodule <a name="`groupMembership` Submodule" id="@cdktf/provider-gitlab.groupMembership"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GroupMembership <a name="GroupMembership" id="@cdktf/provider-gitlab.groupMembership.GroupMembership"></a>

Represents a {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.10.0/docs/resources/group_membership gitlab_group_membership}.

#### Initializers <a name="Initializers" id="@cdktf/provider-gitlab.groupMembership.GroupMembership.Initializer"></a>

```typescript
import { groupMembership } from '@cdktf/provider-gitlab'

new groupMembership.GroupMembership(scope: Construct, id: string, config: GroupMembershipConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.groupMembership.GroupMembership.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-gitlab.groupMembership.GroupMembership.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-gitlab.groupMembership.GroupMembership.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-gitlab.groupMembership.GroupMembershipConfig">GroupMembershipConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-gitlab.groupMembership.GroupMembership.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-gitlab.groupMembership.GroupMembership.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-gitlab.groupMembership.GroupMembership.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-gitlab.groupMembership.GroupMembershipConfig">GroupMembershipConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-gitlab.groupMembership.GroupMembership.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-gitlab.groupMembership.GroupMembership.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupMembership.GroupMembership.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-gitlab.groupMembership.GroupMembership.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-gitlab.groupMembership.GroupMembership.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupMembership.GroupMembership.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupMembership.GroupMembership.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-gitlab.groupMembership.GroupMembership.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-gitlab.groupMembership.GroupMembership.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupMembership.GroupMembership.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupMembership.GroupMembership.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupMembership.GroupMembership.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupMembership.GroupMembership.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupMembership.GroupMembership.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupMembership.GroupMembership.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupMembership.GroupMembership.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupMembership.GroupMembership.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupMembership.GroupMembership.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupMembership.GroupMembership.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupMembership.GroupMembership.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupMembership.GroupMembership.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-gitlab.groupMembership.GroupMembership.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-gitlab.groupMembership.GroupMembership.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-gitlab.groupMembership.GroupMembership.resetExpiresAt">resetExpiresAt</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupMembership.GroupMembership.resetMemberRoleId">resetMemberRoleId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupMembership.GroupMembership.resetSkipSubresourcesOnDestroy">resetSkipSubresourcesOnDestroy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupMembership.GroupMembership.resetUnassignIssuablesOnDestroy">resetUnassignIssuablesOnDestroy</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-gitlab.groupMembership.GroupMembership.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-gitlab.groupMembership.GroupMembership.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-gitlab.groupMembership.GroupMembership.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-gitlab.groupMembership.GroupMembership.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-gitlab.groupMembership.GroupMembership.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-gitlab.groupMembership.GroupMembership.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-gitlab.groupMembership.GroupMembership.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-gitlab.groupMembership.GroupMembership.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-gitlab.groupMembership.GroupMembership.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-gitlab.groupMembership.GroupMembership.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-gitlab.groupMembership.GroupMembership.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-gitlab.groupMembership.GroupMembership.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-gitlab.groupMembership.GroupMembership.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.groupMembership.GroupMembership.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-gitlab.groupMembership.GroupMembership.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.groupMembership.GroupMembership.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-gitlab.groupMembership.GroupMembership.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.groupMembership.GroupMembership.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-gitlab.groupMembership.GroupMembership.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.groupMembership.GroupMembership.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-gitlab.groupMembership.GroupMembership.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.groupMembership.GroupMembership.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-gitlab.groupMembership.GroupMembership.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.groupMembership.GroupMembership.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-gitlab.groupMembership.GroupMembership.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.groupMembership.GroupMembership.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-gitlab.groupMembership.GroupMembership.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.groupMembership.GroupMembership.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-gitlab.groupMembership.GroupMembership.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.groupMembership.GroupMembership.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-gitlab.groupMembership.GroupMembership.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-gitlab.groupMembership.GroupMembership.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-gitlab.groupMembership.GroupMembership.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-gitlab.groupMembership.GroupMembership.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-gitlab.groupMembership.GroupMembership.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.groupMembership.GroupMembership.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-gitlab.groupMembership.GroupMembership.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-gitlab.groupMembership.GroupMembership.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-gitlab.groupMembership.GroupMembership.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-gitlab.groupMembership.GroupMembership.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-gitlab.groupMembership.GroupMembership.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-gitlab.groupMembership.GroupMembership.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-gitlab.groupMembership.GroupMembership.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `resetExpiresAt` <a name="resetExpiresAt" id="@cdktf/provider-gitlab.groupMembership.GroupMembership.resetExpiresAt"></a>

```typescript
public resetExpiresAt(): void
```

##### `resetMemberRoleId` <a name="resetMemberRoleId" id="@cdktf/provider-gitlab.groupMembership.GroupMembership.resetMemberRoleId"></a>

```typescript
public resetMemberRoleId(): void
```

##### `resetSkipSubresourcesOnDestroy` <a name="resetSkipSubresourcesOnDestroy" id="@cdktf/provider-gitlab.groupMembership.GroupMembership.resetSkipSubresourcesOnDestroy"></a>

```typescript
public resetSkipSubresourcesOnDestroy(): void
```

##### `resetUnassignIssuablesOnDestroy` <a name="resetUnassignIssuablesOnDestroy" id="@cdktf/provider-gitlab.groupMembership.GroupMembership.resetUnassignIssuablesOnDestroy"></a>

```typescript
public resetUnassignIssuablesOnDestroy(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-gitlab.groupMembership.GroupMembership.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-gitlab.groupMembership.GroupMembership.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupMembership.GroupMembership.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupMembership.GroupMembership.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a GroupMembership resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-gitlab.groupMembership.GroupMembership.isConstruct"></a>

```typescript
import { groupMembership } from '@cdktf/provider-gitlab'

groupMembership.GroupMembership.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-gitlab.groupMembership.GroupMembership.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-gitlab.groupMembership.GroupMembership.isTerraformElement"></a>

```typescript
import { groupMembership } from '@cdktf/provider-gitlab'

groupMembership.GroupMembership.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-gitlab.groupMembership.GroupMembership.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-gitlab.groupMembership.GroupMembership.isTerraformResource"></a>

```typescript
import { groupMembership } from '@cdktf/provider-gitlab'

groupMembership.GroupMembership.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-gitlab.groupMembership.GroupMembership.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-gitlab.groupMembership.GroupMembership.generateConfigForImport"></a>

```typescript
import { groupMembership } from '@cdktf/provider-gitlab'

groupMembership.GroupMembership.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a GroupMembership resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-gitlab.groupMembership.GroupMembership.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-gitlab.groupMembership.GroupMembership.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the GroupMembership to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-gitlab.groupMembership.GroupMembership.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing GroupMembership that should be imported.

Refer to the {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.10.0/docs/resources/group_membership#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-gitlab.groupMembership.GroupMembership.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the GroupMembership to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.groupMembership.GroupMembership.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-gitlab.groupMembership.GroupMembership.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupMembership.GroupMembership.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupMembership.GroupMembership.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupMembership.GroupMembership.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupMembership.GroupMembership.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupMembership.GroupMembership.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupMembership.GroupMembership.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupMembership.GroupMembership.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupMembership.GroupMembership.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupMembership.GroupMembership.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupMembership.GroupMembership.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupMembership.GroupMembership.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupMembership.GroupMembership.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupMembership.GroupMembership.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupMembership.GroupMembership.property.accessLevelInput">accessLevelInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupMembership.GroupMembership.property.expiresAtInput">expiresAtInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupMembership.GroupMembership.property.groupIdInput">groupIdInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupMembership.GroupMembership.property.memberRoleIdInput">memberRoleIdInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupMembership.GroupMembership.property.skipSubresourcesOnDestroyInput">skipSubresourcesOnDestroyInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupMembership.GroupMembership.property.unassignIssuablesOnDestroyInput">unassignIssuablesOnDestroyInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupMembership.GroupMembership.property.userIdInput">userIdInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupMembership.GroupMembership.property.accessLevel">accessLevel</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupMembership.GroupMembership.property.expiresAt">expiresAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupMembership.GroupMembership.property.groupId">groupId</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupMembership.GroupMembership.property.memberRoleId">memberRoleId</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupMembership.GroupMembership.property.skipSubresourcesOnDestroy">skipSubresourcesOnDestroy</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupMembership.GroupMembership.property.unassignIssuablesOnDestroy">unassignIssuablesOnDestroy</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupMembership.GroupMembership.property.userId">userId</a></code> | <code>number</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-gitlab.groupMembership.GroupMembership.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-gitlab.groupMembership.GroupMembership.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-gitlab.groupMembership.GroupMembership.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-gitlab.groupMembership.GroupMembership.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-gitlab.groupMembership.GroupMembership.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-gitlab.groupMembership.GroupMembership.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-gitlab.groupMembership.GroupMembership.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-gitlab.groupMembership.GroupMembership.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-gitlab.groupMembership.GroupMembership.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-gitlab.groupMembership.GroupMembership.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-gitlab.groupMembership.GroupMembership.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-gitlab.groupMembership.GroupMembership.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-gitlab.groupMembership.GroupMembership.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-gitlab.groupMembership.GroupMembership.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-gitlab.groupMembership.GroupMembership.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `accessLevelInput`<sup>Optional</sup> <a name="accessLevelInput" id="@cdktf/provider-gitlab.groupMembership.GroupMembership.property.accessLevelInput"></a>

```typescript
public readonly accessLevelInput: string;
```

- *Type:* string

---

##### `expiresAtInput`<sup>Optional</sup> <a name="expiresAtInput" id="@cdktf/provider-gitlab.groupMembership.GroupMembership.property.expiresAtInput"></a>

```typescript
public readonly expiresAtInput: string;
```

- *Type:* string

---

##### `groupIdInput`<sup>Optional</sup> <a name="groupIdInput" id="@cdktf/provider-gitlab.groupMembership.GroupMembership.property.groupIdInput"></a>

```typescript
public readonly groupIdInput: number;
```

- *Type:* number

---

##### `memberRoleIdInput`<sup>Optional</sup> <a name="memberRoleIdInput" id="@cdktf/provider-gitlab.groupMembership.GroupMembership.property.memberRoleIdInput"></a>

```typescript
public readonly memberRoleIdInput: number;
```

- *Type:* number

---

##### `skipSubresourcesOnDestroyInput`<sup>Optional</sup> <a name="skipSubresourcesOnDestroyInput" id="@cdktf/provider-gitlab.groupMembership.GroupMembership.property.skipSubresourcesOnDestroyInput"></a>

```typescript
public readonly skipSubresourcesOnDestroyInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `unassignIssuablesOnDestroyInput`<sup>Optional</sup> <a name="unassignIssuablesOnDestroyInput" id="@cdktf/provider-gitlab.groupMembership.GroupMembership.property.unassignIssuablesOnDestroyInput"></a>

```typescript
public readonly unassignIssuablesOnDestroyInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `userIdInput`<sup>Optional</sup> <a name="userIdInput" id="@cdktf/provider-gitlab.groupMembership.GroupMembership.property.userIdInput"></a>

```typescript
public readonly userIdInput: number;
```

- *Type:* number

---

##### `accessLevel`<sup>Required</sup> <a name="accessLevel" id="@cdktf/provider-gitlab.groupMembership.GroupMembership.property.accessLevel"></a>

```typescript
public readonly accessLevel: string;
```

- *Type:* string

---

##### `expiresAt`<sup>Required</sup> <a name="expiresAt" id="@cdktf/provider-gitlab.groupMembership.GroupMembership.property.expiresAt"></a>

```typescript
public readonly expiresAt: string;
```

- *Type:* string

---

##### `groupId`<sup>Required</sup> <a name="groupId" id="@cdktf/provider-gitlab.groupMembership.GroupMembership.property.groupId"></a>

```typescript
public readonly groupId: number;
```

- *Type:* number

---

##### `memberRoleId`<sup>Required</sup> <a name="memberRoleId" id="@cdktf/provider-gitlab.groupMembership.GroupMembership.property.memberRoleId"></a>

```typescript
public readonly memberRoleId: number;
```

- *Type:* number

---

##### `skipSubresourcesOnDestroy`<sup>Required</sup> <a name="skipSubresourcesOnDestroy" id="@cdktf/provider-gitlab.groupMembership.GroupMembership.property.skipSubresourcesOnDestroy"></a>

```typescript
public readonly skipSubresourcesOnDestroy: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `unassignIssuablesOnDestroy`<sup>Required</sup> <a name="unassignIssuablesOnDestroy" id="@cdktf/provider-gitlab.groupMembership.GroupMembership.property.unassignIssuablesOnDestroy"></a>

```typescript
public readonly unassignIssuablesOnDestroy: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `userId`<sup>Required</sup> <a name="userId" id="@cdktf/provider-gitlab.groupMembership.GroupMembership.property.userId"></a>

```typescript
public readonly userId: number;
```

- *Type:* number

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.groupMembership.GroupMembership.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-gitlab.groupMembership.GroupMembership.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### GroupMembershipConfig <a name="GroupMembershipConfig" id="@cdktf/provider-gitlab.groupMembership.GroupMembershipConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-gitlab.groupMembership.GroupMembershipConfig.Initializer"></a>

```typescript
import { groupMembership } from '@cdktf/provider-gitlab'

const groupMembershipConfig: groupMembership.GroupMembershipConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.groupMembership.GroupMembershipConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupMembership.GroupMembershipConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupMembership.GroupMembershipConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupMembership.GroupMembershipConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupMembership.GroupMembershipConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupMembership.GroupMembershipConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupMembership.GroupMembershipConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupMembership.GroupMembershipConfig.property.accessLevel">accessLevel</a></code> | <code>string</code> | Access level for the member. Valid values are: `no one`, `minimal`, `guest`, `reporter`, `developer`, `maintainer`, `owner`. |
| <code><a href="#@cdktf/provider-gitlab.groupMembership.GroupMembershipConfig.property.groupId">groupId</a></code> | <code>number</code> | The ID of the group. |
| <code><a href="#@cdktf/provider-gitlab.groupMembership.GroupMembershipConfig.property.userId">userId</a></code> | <code>number</code> | The ID of the user. |
| <code><a href="#@cdktf/provider-gitlab.groupMembership.GroupMembershipConfig.property.expiresAt">expiresAt</a></code> | <code>string</code> | Expiration date for the group membership. Format: `YYYY-MM-DD`. |
| <code><a href="#@cdktf/provider-gitlab.groupMembership.GroupMembershipConfig.property.memberRoleId">memberRoleId</a></code> | <code>number</code> | The ID of a custom member role. Only available for Ultimate instances. |
| <code><a href="#@cdktf/provider-gitlab.groupMembership.GroupMembershipConfig.property.skipSubresourcesOnDestroy">skipSubresourcesOnDestroy</a></code> | <code>boolean \| cdktf.IResolvable</code> | Whether the deletion of direct memberships of the removed member in subgroups and projects should be skipped. |
| <code><a href="#@cdktf/provider-gitlab.groupMembership.GroupMembershipConfig.property.unassignIssuablesOnDestroy">unassignIssuablesOnDestroy</a></code> | <code>boolean \| cdktf.IResolvable</code> | Whether the removed member should be unassigned from any issues or merge requests inside a given group or project. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-gitlab.groupMembership.GroupMembershipConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-gitlab.groupMembership.GroupMembershipConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-gitlab.groupMembership.GroupMembershipConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-gitlab.groupMembership.GroupMembershipConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-gitlab.groupMembership.GroupMembershipConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-gitlab.groupMembership.GroupMembershipConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-gitlab.groupMembership.GroupMembershipConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `accessLevel`<sup>Required</sup> <a name="accessLevel" id="@cdktf/provider-gitlab.groupMembership.GroupMembershipConfig.property.accessLevel"></a>

```typescript
public readonly accessLevel: string;
```

- *Type:* string

Access level for the member. Valid values are: `no one`, `minimal`, `guest`, `reporter`, `developer`, `maintainer`, `owner`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.10.0/docs/resources/group_membership#access_level GroupMembership#access_level}

---

##### `groupId`<sup>Required</sup> <a name="groupId" id="@cdktf/provider-gitlab.groupMembership.GroupMembershipConfig.property.groupId"></a>

```typescript
public readonly groupId: number;
```

- *Type:* number

The ID of the group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.10.0/docs/resources/group_membership#group_id GroupMembership#group_id}

---

##### `userId`<sup>Required</sup> <a name="userId" id="@cdktf/provider-gitlab.groupMembership.GroupMembershipConfig.property.userId"></a>

```typescript
public readonly userId: number;
```

- *Type:* number

The ID of the user.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.10.0/docs/resources/group_membership#user_id GroupMembership#user_id}

---

##### `expiresAt`<sup>Optional</sup> <a name="expiresAt" id="@cdktf/provider-gitlab.groupMembership.GroupMembershipConfig.property.expiresAt"></a>

```typescript
public readonly expiresAt: string;
```

- *Type:* string

Expiration date for the group membership. Format: `YYYY-MM-DD`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.10.0/docs/resources/group_membership#expires_at GroupMembership#expires_at}

---

##### `memberRoleId`<sup>Optional</sup> <a name="memberRoleId" id="@cdktf/provider-gitlab.groupMembership.GroupMembershipConfig.property.memberRoleId"></a>

```typescript
public readonly memberRoleId: number;
```

- *Type:* number

The ID of a custom member role. Only available for Ultimate instances.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.10.0/docs/resources/group_membership#member_role_id GroupMembership#member_role_id}

---

##### `skipSubresourcesOnDestroy`<sup>Optional</sup> <a name="skipSubresourcesOnDestroy" id="@cdktf/provider-gitlab.groupMembership.GroupMembershipConfig.property.skipSubresourcesOnDestroy"></a>

```typescript
public readonly skipSubresourcesOnDestroy: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Whether the deletion of direct memberships of the removed member in subgroups and projects should be skipped.

Only used during a destroy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.10.0/docs/resources/group_membership#skip_subresources_on_destroy GroupMembership#skip_subresources_on_destroy}

---

##### `unassignIssuablesOnDestroy`<sup>Optional</sup> <a name="unassignIssuablesOnDestroy" id="@cdktf/provider-gitlab.groupMembership.GroupMembershipConfig.property.unassignIssuablesOnDestroy"></a>

```typescript
public readonly unassignIssuablesOnDestroy: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Whether the removed member should be unassigned from any issues or merge requests inside a given group or project.

Only used during a destroy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.10.0/docs/resources/group_membership#unassign_issuables_on_destroy GroupMembership#unassign_issuables_on_destroy}

---



