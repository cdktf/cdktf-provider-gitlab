# `branchProtection` Submodule <a name="`branchProtection` Submodule" id="@cdktf/provider-gitlab.branchProtection"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### BranchProtection <a name="BranchProtection" id="@cdktf/provider-gitlab.branchProtection.BranchProtection"></a>

Represents a {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.1.1/docs/resources/branch_protection gitlab_branch_protection}.

#### Initializers <a name="Initializers" id="@cdktf/provider-gitlab.branchProtection.BranchProtection.Initializer"></a>

```typescript
import { branchProtection } from '@cdktf/provider-gitlab'

new branchProtection.BranchProtection(scope: Construct, id: string, config: BranchProtectionConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.branchProtection.BranchProtection.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-gitlab.branchProtection.BranchProtection.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-gitlab.branchProtection.BranchProtection.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-gitlab.branchProtection.BranchProtectionConfig">BranchProtectionConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-gitlab.branchProtection.BranchProtection.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-gitlab.branchProtection.BranchProtection.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-gitlab.branchProtection.BranchProtection.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-gitlab.branchProtection.BranchProtectionConfig">BranchProtectionConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-gitlab.branchProtection.BranchProtection.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-gitlab.branchProtection.BranchProtection.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.branchProtection.BranchProtection.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-gitlab.branchProtection.BranchProtection.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-gitlab.branchProtection.BranchProtection.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.branchProtection.BranchProtection.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.branchProtection.BranchProtection.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-gitlab.branchProtection.BranchProtection.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-gitlab.branchProtection.BranchProtection.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.branchProtection.BranchProtection.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.branchProtection.BranchProtection.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.branchProtection.BranchProtection.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.branchProtection.BranchProtection.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.branchProtection.BranchProtection.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.branchProtection.BranchProtection.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.branchProtection.BranchProtection.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.branchProtection.BranchProtection.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.branchProtection.BranchProtection.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.branchProtection.BranchProtection.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.branchProtection.BranchProtection.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.branchProtection.BranchProtection.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-gitlab.branchProtection.BranchProtection.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-gitlab.branchProtection.BranchProtection.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-gitlab.branchProtection.BranchProtection.putAllowedToMerge">putAllowedToMerge</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.branchProtection.BranchProtection.putAllowedToPush">putAllowedToPush</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.branchProtection.BranchProtection.putAllowedToUnprotect">putAllowedToUnprotect</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.branchProtection.BranchProtection.resetAllowedToMerge">resetAllowedToMerge</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.branchProtection.BranchProtection.resetAllowedToPush">resetAllowedToPush</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.branchProtection.BranchProtection.resetAllowedToUnprotect">resetAllowedToUnprotect</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.branchProtection.BranchProtection.resetAllowForcePush">resetAllowForcePush</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.branchProtection.BranchProtection.resetCodeOwnerApprovalRequired">resetCodeOwnerApprovalRequired</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.branchProtection.BranchProtection.resetMergeAccessLevel">resetMergeAccessLevel</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.branchProtection.BranchProtection.resetPushAccessLevel">resetPushAccessLevel</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.branchProtection.BranchProtection.resetUnprotectAccessLevel">resetUnprotectAccessLevel</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-gitlab.branchProtection.BranchProtection.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-gitlab.branchProtection.BranchProtection.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-gitlab.branchProtection.BranchProtection.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-gitlab.branchProtection.BranchProtection.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-gitlab.branchProtection.BranchProtection.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-gitlab.branchProtection.BranchProtection.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-gitlab.branchProtection.BranchProtection.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-gitlab.branchProtection.BranchProtection.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-gitlab.branchProtection.BranchProtection.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-gitlab.branchProtection.BranchProtection.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-gitlab.branchProtection.BranchProtection.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-gitlab.branchProtection.BranchProtection.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-gitlab.branchProtection.BranchProtection.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.branchProtection.BranchProtection.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-gitlab.branchProtection.BranchProtection.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.branchProtection.BranchProtection.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-gitlab.branchProtection.BranchProtection.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.branchProtection.BranchProtection.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-gitlab.branchProtection.BranchProtection.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.branchProtection.BranchProtection.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-gitlab.branchProtection.BranchProtection.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.branchProtection.BranchProtection.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-gitlab.branchProtection.BranchProtection.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.branchProtection.BranchProtection.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-gitlab.branchProtection.BranchProtection.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.branchProtection.BranchProtection.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-gitlab.branchProtection.BranchProtection.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.branchProtection.BranchProtection.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-gitlab.branchProtection.BranchProtection.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.branchProtection.BranchProtection.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-gitlab.branchProtection.BranchProtection.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-gitlab.branchProtection.BranchProtection.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-gitlab.branchProtection.BranchProtection.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-gitlab.branchProtection.BranchProtection.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-gitlab.branchProtection.BranchProtection.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.branchProtection.BranchProtection.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-gitlab.branchProtection.BranchProtection.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-gitlab.branchProtection.BranchProtection.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-gitlab.branchProtection.BranchProtection.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-gitlab.branchProtection.BranchProtection.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-gitlab.branchProtection.BranchProtection.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-gitlab.branchProtection.BranchProtection.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-gitlab.branchProtection.BranchProtection.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putAllowedToMerge` <a name="putAllowedToMerge" id="@cdktf/provider-gitlab.branchProtection.BranchProtection.putAllowedToMerge"></a>

```typescript
public putAllowedToMerge(value: IResolvable | BranchProtectionAllowedToMerge[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-gitlab.branchProtection.BranchProtection.putAllowedToMerge.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToMerge">BranchProtectionAllowedToMerge</a>[]

---

##### `putAllowedToPush` <a name="putAllowedToPush" id="@cdktf/provider-gitlab.branchProtection.BranchProtection.putAllowedToPush"></a>

```typescript
public putAllowedToPush(value: IResolvable | BranchProtectionAllowedToPush[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-gitlab.branchProtection.BranchProtection.putAllowedToPush.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToPush">BranchProtectionAllowedToPush</a>[]

---

##### `putAllowedToUnprotect` <a name="putAllowedToUnprotect" id="@cdktf/provider-gitlab.branchProtection.BranchProtection.putAllowedToUnprotect"></a>

```typescript
public putAllowedToUnprotect(value: IResolvable | BranchProtectionAllowedToUnprotect[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-gitlab.branchProtection.BranchProtection.putAllowedToUnprotect.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToUnprotect">BranchProtectionAllowedToUnprotect</a>[]

---

##### `resetAllowedToMerge` <a name="resetAllowedToMerge" id="@cdktf/provider-gitlab.branchProtection.BranchProtection.resetAllowedToMerge"></a>

```typescript
public resetAllowedToMerge(): void
```

##### `resetAllowedToPush` <a name="resetAllowedToPush" id="@cdktf/provider-gitlab.branchProtection.BranchProtection.resetAllowedToPush"></a>

```typescript
public resetAllowedToPush(): void
```

##### `resetAllowedToUnprotect` <a name="resetAllowedToUnprotect" id="@cdktf/provider-gitlab.branchProtection.BranchProtection.resetAllowedToUnprotect"></a>

```typescript
public resetAllowedToUnprotect(): void
```

##### `resetAllowForcePush` <a name="resetAllowForcePush" id="@cdktf/provider-gitlab.branchProtection.BranchProtection.resetAllowForcePush"></a>

```typescript
public resetAllowForcePush(): void
```

##### `resetCodeOwnerApprovalRequired` <a name="resetCodeOwnerApprovalRequired" id="@cdktf/provider-gitlab.branchProtection.BranchProtection.resetCodeOwnerApprovalRequired"></a>

```typescript
public resetCodeOwnerApprovalRequired(): void
```

##### `resetMergeAccessLevel` <a name="resetMergeAccessLevel" id="@cdktf/provider-gitlab.branchProtection.BranchProtection.resetMergeAccessLevel"></a>

```typescript
public resetMergeAccessLevel(): void
```

##### `resetPushAccessLevel` <a name="resetPushAccessLevel" id="@cdktf/provider-gitlab.branchProtection.BranchProtection.resetPushAccessLevel"></a>

```typescript
public resetPushAccessLevel(): void
```

##### `resetUnprotectAccessLevel` <a name="resetUnprotectAccessLevel" id="@cdktf/provider-gitlab.branchProtection.BranchProtection.resetUnprotectAccessLevel"></a>

```typescript
public resetUnprotectAccessLevel(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-gitlab.branchProtection.BranchProtection.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-gitlab.branchProtection.BranchProtection.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.branchProtection.BranchProtection.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.branchProtection.BranchProtection.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a BranchProtection resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-gitlab.branchProtection.BranchProtection.isConstruct"></a>

```typescript
import { branchProtection } from '@cdktf/provider-gitlab'

branchProtection.BranchProtection.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-gitlab.branchProtection.BranchProtection.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-gitlab.branchProtection.BranchProtection.isTerraformElement"></a>

```typescript
import { branchProtection } from '@cdktf/provider-gitlab'

branchProtection.BranchProtection.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-gitlab.branchProtection.BranchProtection.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-gitlab.branchProtection.BranchProtection.isTerraformResource"></a>

```typescript
import { branchProtection } from '@cdktf/provider-gitlab'

branchProtection.BranchProtection.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-gitlab.branchProtection.BranchProtection.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-gitlab.branchProtection.BranchProtection.generateConfigForImport"></a>

```typescript
import { branchProtection } from '@cdktf/provider-gitlab'

branchProtection.BranchProtection.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a BranchProtection resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-gitlab.branchProtection.BranchProtection.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-gitlab.branchProtection.BranchProtection.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the BranchProtection to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-gitlab.branchProtection.BranchProtection.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing BranchProtection that should be imported.

Refer to the {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.1.1/docs/resources/branch_protection#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-gitlab.branchProtection.BranchProtection.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the BranchProtection to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.branchProtection.BranchProtection.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-gitlab.branchProtection.BranchProtection.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.branchProtection.BranchProtection.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.branchProtection.BranchProtection.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.branchProtection.BranchProtection.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.branchProtection.BranchProtection.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.branchProtection.BranchProtection.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.branchProtection.BranchProtection.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.branchProtection.BranchProtection.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.branchProtection.BranchProtection.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.branchProtection.BranchProtection.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.branchProtection.BranchProtection.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.branchProtection.BranchProtection.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.branchProtection.BranchProtection.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.branchProtection.BranchProtection.property.allowedToMerge">allowedToMerge</a></code> | <code><a href="#@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToMergeList">BranchProtectionAllowedToMergeList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.branchProtection.BranchProtection.property.allowedToPush">allowedToPush</a></code> | <code><a href="#@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToPushList">BranchProtectionAllowedToPushList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.branchProtection.BranchProtection.property.allowedToUnprotect">allowedToUnprotect</a></code> | <code><a href="#@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToUnprotectList">BranchProtectionAllowedToUnprotectList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.branchProtection.BranchProtection.property.branchProtectionId">branchProtectionId</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.branchProtection.BranchProtection.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.branchProtection.BranchProtection.property.allowedToMergeInput">allowedToMergeInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToMerge">BranchProtectionAllowedToMerge</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.branchProtection.BranchProtection.property.allowedToPushInput">allowedToPushInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToPush">BranchProtectionAllowedToPush</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.branchProtection.BranchProtection.property.allowedToUnprotectInput">allowedToUnprotectInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToUnprotect">BranchProtectionAllowedToUnprotect</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.branchProtection.BranchProtection.property.allowForcePushInput">allowForcePushInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.branchProtection.BranchProtection.property.branchInput">branchInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.branchProtection.BranchProtection.property.codeOwnerApprovalRequiredInput">codeOwnerApprovalRequiredInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.branchProtection.BranchProtection.property.mergeAccessLevelInput">mergeAccessLevelInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.branchProtection.BranchProtection.property.projectInput">projectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.branchProtection.BranchProtection.property.pushAccessLevelInput">pushAccessLevelInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.branchProtection.BranchProtection.property.unprotectAccessLevelInput">unprotectAccessLevelInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.branchProtection.BranchProtection.property.allowForcePush">allowForcePush</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.branchProtection.BranchProtection.property.branch">branch</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.branchProtection.BranchProtection.property.codeOwnerApprovalRequired">codeOwnerApprovalRequired</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.branchProtection.BranchProtection.property.mergeAccessLevel">mergeAccessLevel</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.branchProtection.BranchProtection.property.project">project</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.branchProtection.BranchProtection.property.pushAccessLevel">pushAccessLevel</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.branchProtection.BranchProtection.property.unprotectAccessLevel">unprotectAccessLevel</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-gitlab.branchProtection.BranchProtection.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-gitlab.branchProtection.BranchProtection.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-gitlab.branchProtection.BranchProtection.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-gitlab.branchProtection.BranchProtection.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-gitlab.branchProtection.BranchProtection.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-gitlab.branchProtection.BranchProtection.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-gitlab.branchProtection.BranchProtection.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-gitlab.branchProtection.BranchProtection.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-gitlab.branchProtection.BranchProtection.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-gitlab.branchProtection.BranchProtection.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-gitlab.branchProtection.BranchProtection.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-gitlab.branchProtection.BranchProtection.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-gitlab.branchProtection.BranchProtection.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-gitlab.branchProtection.BranchProtection.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `allowedToMerge`<sup>Required</sup> <a name="allowedToMerge" id="@cdktf/provider-gitlab.branchProtection.BranchProtection.property.allowedToMerge"></a>

```typescript
public readonly allowedToMerge: BranchProtectionAllowedToMergeList;
```

- *Type:* <a href="#@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToMergeList">BranchProtectionAllowedToMergeList</a>

---

##### `allowedToPush`<sup>Required</sup> <a name="allowedToPush" id="@cdktf/provider-gitlab.branchProtection.BranchProtection.property.allowedToPush"></a>

```typescript
public readonly allowedToPush: BranchProtectionAllowedToPushList;
```

- *Type:* <a href="#@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToPushList">BranchProtectionAllowedToPushList</a>

---

##### `allowedToUnprotect`<sup>Required</sup> <a name="allowedToUnprotect" id="@cdktf/provider-gitlab.branchProtection.BranchProtection.property.allowedToUnprotect"></a>

```typescript
public readonly allowedToUnprotect: BranchProtectionAllowedToUnprotectList;
```

- *Type:* <a href="#@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToUnprotectList">BranchProtectionAllowedToUnprotectList</a>

---

##### `branchProtectionId`<sup>Required</sup> <a name="branchProtectionId" id="@cdktf/provider-gitlab.branchProtection.BranchProtection.property.branchProtectionId"></a>

```typescript
public readonly branchProtectionId: number;
```

- *Type:* number

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-gitlab.branchProtection.BranchProtection.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `allowedToMergeInput`<sup>Optional</sup> <a name="allowedToMergeInput" id="@cdktf/provider-gitlab.branchProtection.BranchProtection.property.allowedToMergeInput"></a>

```typescript
public readonly allowedToMergeInput: IResolvable | BranchProtectionAllowedToMerge[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToMerge">BranchProtectionAllowedToMerge</a>[]

---

##### `allowedToPushInput`<sup>Optional</sup> <a name="allowedToPushInput" id="@cdktf/provider-gitlab.branchProtection.BranchProtection.property.allowedToPushInput"></a>

```typescript
public readonly allowedToPushInput: IResolvable | BranchProtectionAllowedToPush[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToPush">BranchProtectionAllowedToPush</a>[]

---

##### `allowedToUnprotectInput`<sup>Optional</sup> <a name="allowedToUnprotectInput" id="@cdktf/provider-gitlab.branchProtection.BranchProtection.property.allowedToUnprotectInput"></a>

```typescript
public readonly allowedToUnprotectInput: IResolvable | BranchProtectionAllowedToUnprotect[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToUnprotect">BranchProtectionAllowedToUnprotect</a>[]

---

##### `allowForcePushInput`<sup>Optional</sup> <a name="allowForcePushInput" id="@cdktf/provider-gitlab.branchProtection.BranchProtection.property.allowForcePushInput"></a>

```typescript
public readonly allowForcePushInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `branchInput`<sup>Optional</sup> <a name="branchInput" id="@cdktf/provider-gitlab.branchProtection.BranchProtection.property.branchInput"></a>

```typescript
public readonly branchInput: string;
```

- *Type:* string

---

##### `codeOwnerApprovalRequiredInput`<sup>Optional</sup> <a name="codeOwnerApprovalRequiredInput" id="@cdktf/provider-gitlab.branchProtection.BranchProtection.property.codeOwnerApprovalRequiredInput"></a>

```typescript
public readonly codeOwnerApprovalRequiredInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `mergeAccessLevelInput`<sup>Optional</sup> <a name="mergeAccessLevelInput" id="@cdktf/provider-gitlab.branchProtection.BranchProtection.property.mergeAccessLevelInput"></a>

```typescript
public readonly mergeAccessLevelInput: string;
```

- *Type:* string

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktf/provider-gitlab.branchProtection.BranchProtection.property.projectInput"></a>

```typescript
public readonly projectInput: string;
```

- *Type:* string

---

##### `pushAccessLevelInput`<sup>Optional</sup> <a name="pushAccessLevelInput" id="@cdktf/provider-gitlab.branchProtection.BranchProtection.property.pushAccessLevelInput"></a>

```typescript
public readonly pushAccessLevelInput: string;
```

- *Type:* string

---

##### `unprotectAccessLevelInput`<sup>Optional</sup> <a name="unprotectAccessLevelInput" id="@cdktf/provider-gitlab.branchProtection.BranchProtection.property.unprotectAccessLevelInput"></a>

```typescript
public readonly unprotectAccessLevelInput: string;
```

- *Type:* string

---

##### `allowForcePush`<sup>Required</sup> <a name="allowForcePush" id="@cdktf/provider-gitlab.branchProtection.BranchProtection.property.allowForcePush"></a>

```typescript
public readonly allowForcePush: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `branch`<sup>Required</sup> <a name="branch" id="@cdktf/provider-gitlab.branchProtection.BranchProtection.property.branch"></a>

```typescript
public readonly branch: string;
```

- *Type:* string

---

##### `codeOwnerApprovalRequired`<sup>Required</sup> <a name="codeOwnerApprovalRequired" id="@cdktf/provider-gitlab.branchProtection.BranchProtection.property.codeOwnerApprovalRequired"></a>

```typescript
public readonly codeOwnerApprovalRequired: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `mergeAccessLevel`<sup>Required</sup> <a name="mergeAccessLevel" id="@cdktf/provider-gitlab.branchProtection.BranchProtection.property.mergeAccessLevel"></a>

```typescript
public readonly mergeAccessLevel: string;
```

- *Type:* string

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-gitlab.branchProtection.BranchProtection.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

---

##### `pushAccessLevel`<sup>Required</sup> <a name="pushAccessLevel" id="@cdktf/provider-gitlab.branchProtection.BranchProtection.property.pushAccessLevel"></a>

```typescript
public readonly pushAccessLevel: string;
```

- *Type:* string

---

##### `unprotectAccessLevel`<sup>Required</sup> <a name="unprotectAccessLevel" id="@cdktf/provider-gitlab.branchProtection.BranchProtection.property.unprotectAccessLevel"></a>

```typescript
public readonly unprotectAccessLevel: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.branchProtection.BranchProtection.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-gitlab.branchProtection.BranchProtection.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### BranchProtectionAllowedToMerge <a name="BranchProtectionAllowedToMerge" id="@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToMerge"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToMerge.Initializer"></a>

```typescript
import { branchProtection } from '@cdktf/provider-gitlab'

const branchProtectionAllowedToMerge: branchProtection.BranchProtectionAllowedToMerge = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToMerge.property.groupId">groupId</a></code> | <code>number</code> | The ID of a GitLab group allowed to perform the relevant action. Mutually exclusive with `user_id`. |
| <code><a href="#@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToMerge.property.userId">userId</a></code> | <code>number</code> | The ID of a GitLab user allowed to perform the relevant action. Mutually exclusive with `group_id`. |

---

##### `groupId`<sup>Optional</sup> <a name="groupId" id="@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToMerge.property.groupId"></a>

```typescript
public readonly groupId: number;
```

- *Type:* number

The ID of a GitLab group allowed to perform the relevant action. Mutually exclusive with `user_id`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.1.1/docs/resources/branch_protection#group_id BranchProtection#group_id}

---

##### `userId`<sup>Optional</sup> <a name="userId" id="@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToMerge.property.userId"></a>

```typescript
public readonly userId: number;
```

- *Type:* number

The ID of a GitLab user allowed to perform the relevant action. Mutually exclusive with `group_id`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.1.1/docs/resources/branch_protection#user_id BranchProtection#user_id}

---

### BranchProtectionAllowedToPush <a name="BranchProtectionAllowedToPush" id="@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToPush"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToPush.Initializer"></a>

```typescript
import { branchProtection } from '@cdktf/provider-gitlab'

const branchProtectionAllowedToPush: branchProtection.BranchProtectionAllowedToPush = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToPush.property.deployKeyId">deployKeyId</a></code> | <code>number</code> | The ID of a GitLab deploy key allowed to perform the relevant action. |
| <code><a href="#@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToPush.property.groupId">groupId</a></code> | <code>number</code> | The ID of a GitLab group allowed to perform the relevant action. Mutually exclusive with `deploy_key_id` and `user_id`. |
| <code><a href="#@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToPush.property.userId">userId</a></code> | <code>number</code> | The ID of a GitLab user allowed to perform the relevant action. Mutually exclusive with `deploy_key_id` and `group_id`. |

---

##### `deployKeyId`<sup>Optional</sup> <a name="deployKeyId" id="@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToPush.property.deployKeyId"></a>

```typescript
public readonly deployKeyId: number;
```

- *Type:* number

The ID of a GitLab deploy key allowed to perform the relevant action.

Mutually exclusive with `group_id` and `user_id`. This field is read-only until Gitlab 17.5.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.1.1/docs/resources/branch_protection#deploy_key_id BranchProtection#deploy_key_id}

---

##### `groupId`<sup>Optional</sup> <a name="groupId" id="@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToPush.property.groupId"></a>

```typescript
public readonly groupId: number;
```

- *Type:* number

The ID of a GitLab group allowed to perform the relevant action. Mutually exclusive with `deploy_key_id` and `user_id`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.1.1/docs/resources/branch_protection#group_id BranchProtection#group_id}

---

##### `userId`<sup>Optional</sup> <a name="userId" id="@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToPush.property.userId"></a>

```typescript
public readonly userId: number;
```

- *Type:* number

The ID of a GitLab user allowed to perform the relevant action. Mutually exclusive with `deploy_key_id` and `group_id`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.1.1/docs/resources/branch_protection#user_id BranchProtection#user_id}

---

### BranchProtectionAllowedToUnprotect <a name="BranchProtectionAllowedToUnprotect" id="@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToUnprotect"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToUnprotect.Initializer"></a>

```typescript
import { branchProtection } from '@cdktf/provider-gitlab'

const branchProtectionAllowedToUnprotect: branchProtection.BranchProtectionAllowedToUnprotect = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToUnprotect.property.groupId">groupId</a></code> | <code>number</code> | The ID of a GitLab group allowed to perform the relevant action. Mutually exclusive with `user_id`. |
| <code><a href="#@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToUnprotect.property.userId">userId</a></code> | <code>number</code> | The ID of a GitLab user allowed to perform the relevant action. Mutually exclusive with `group_id`. |

---

##### `groupId`<sup>Optional</sup> <a name="groupId" id="@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToUnprotect.property.groupId"></a>

```typescript
public readonly groupId: number;
```

- *Type:* number

The ID of a GitLab group allowed to perform the relevant action. Mutually exclusive with `user_id`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.1.1/docs/resources/branch_protection#group_id BranchProtection#group_id}

---

##### `userId`<sup>Optional</sup> <a name="userId" id="@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToUnprotect.property.userId"></a>

```typescript
public readonly userId: number;
```

- *Type:* number

The ID of a GitLab user allowed to perform the relevant action. Mutually exclusive with `group_id`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.1.1/docs/resources/branch_protection#user_id BranchProtection#user_id}

---

### BranchProtectionConfig <a name="BranchProtectionConfig" id="@cdktf/provider-gitlab.branchProtection.BranchProtectionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-gitlab.branchProtection.BranchProtectionConfig.Initializer"></a>

```typescript
import { branchProtection } from '@cdktf/provider-gitlab'

const branchProtectionConfig: branchProtection.BranchProtectionConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.branchProtection.BranchProtectionConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.branchProtection.BranchProtectionConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.branchProtection.BranchProtectionConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.branchProtection.BranchProtectionConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.branchProtection.BranchProtectionConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.branchProtection.BranchProtectionConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.branchProtection.BranchProtectionConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.branchProtection.BranchProtectionConfig.property.branch">branch</a></code> | <code>string</code> | Name of the branch. |
| <code><a href="#@cdktf/provider-gitlab.branchProtection.BranchProtectionConfig.property.project">project</a></code> | <code>string</code> | The id of the project. |
| <code><a href="#@cdktf/provider-gitlab.branchProtection.BranchProtectionConfig.property.allowedToMerge">allowedToMerge</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToMerge">BranchProtectionAllowedToMerge</a>[]</code> | allowed_to_merge block. |
| <code><a href="#@cdktf/provider-gitlab.branchProtection.BranchProtectionConfig.property.allowedToPush">allowedToPush</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToPush">BranchProtectionAllowedToPush</a>[]</code> | allowed_to_push block. |
| <code><a href="#@cdktf/provider-gitlab.branchProtection.BranchProtectionConfig.property.allowedToUnprotect">allowedToUnprotect</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToUnprotect">BranchProtectionAllowedToUnprotect</a>[]</code> | allowed_to_unprotect block. |
| <code><a href="#@cdktf/provider-gitlab.branchProtection.BranchProtectionConfig.property.allowForcePush">allowForcePush</a></code> | <code>boolean \| cdktf.IResolvable</code> | Can be set to true to allow users with push access to force push. |
| <code><a href="#@cdktf/provider-gitlab.branchProtection.BranchProtectionConfig.property.codeOwnerApprovalRequired">codeOwnerApprovalRequired</a></code> | <code>boolean \| cdktf.IResolvable</code> | Can be set to true to require code owner approval before merging. Only available for Premium and Ultimate instances. |
| <code><a href="#@cdktf/provider-gitlab.branchProtection.BranchProtectionConfig.property.mergeAccessLevel">mergeAccessLevel</a></code> | <code>string</code> | Access levels allowed to merge. Valid values are: `no one`, `developer`, `maintainer`. |
| <code><a href="#@cdktf/provider-gitlab.branchProtection.BranchProtectionConfig.property.pushAccessLevel">pushAccessLevel</a></code> | <code>string</code> | Access levels allowed to push. Valid values are: `no one`, `developer`, `maintainer`. |
| <code><a href="#@cdktf/provider-gitlab.branchProtection.BranchProtectionConfig.property.unprotectAccessLevel">unprotectAccessLevel</a></code> | <code>string</code> | Access levels allowed to unprotect. Valid values are: `developer`, `maintainer`, `admin`. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-gitlab.branchProtection.BranchProtectionConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-gitlab.branchProtection.BranchProtectionConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-gitlab.branchProtection.BranchProtectionConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-gitlab.branchProtection.BranchProtectionConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-gitlab.branchProtection.BranchProtectionConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-gitlab.branchProtection.BranchProtectionConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-gitlab.branchProtection.BranchProtectionConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `branch`<sup>Required</sup> <a name="branch" id="@cdktf/provider-gitlab.branchProtection.BranchProtectionConfig.property.branch"></a>

```typescript
public readonly branch: string;
```

- *Type:* string

Name of the branch.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.1.1/docs/resources/branch_protection#branch BranchProtection#branch}

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-gitlab.branchProtection.BranchProtectionConfig.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

The id of the project.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.1.1/docs/resources/branch_protection#project BranchProtection#project}

---

##### `allowedToMerge`<sup>Optional</sup> <a name="allowedToMerge" id="@cdktf/provider-gitlab.branchProtection.BranchProtectionConfig.property.allowedToMerge"></a>

```typescript
public readonly allowedToMerge: IResolvable | BranchProtectionAllowedToMerge[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToMerge">BranchProtectionAllowedToMerge</a>[]

allowed_to_merge block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.1.1/docs/resources/branch_protection#allowed_to_merge BranchProtection#allowed_to_merge}

---

##### `allowedToPush`<sup>Optional</sup> <a name="allowedToPush" id="@cdktf/provider-gitlab.branchProtection.BranchProtectionConfig.property.allowedToPush"></a>

```typescript
public readonly allowedToPush: IResolvable | BranchProtectionAllowedToPush[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToPush">BranchProtectionAllowedToPush</a>[]

allowed_to_push block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.1.1/docs/resources/branch_protection#allowed_to_push BranchProtection#allowed_to_push}

---

##### `allowedToUnprotect`<sup>Optional</sup> <a name="allowedToUnprotect" id="@cdktf/provider-gitlab.branchProtection.BranchProtectionConfig.property.allowedToUnprotect"></a>

```typescript
public readonly allowedToUnprotect: IResolvable | BranchProtectionAllowedToUnprotect[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToUnprotect">BranchProtectionAllowedToUnprotect</a>[]

allowed_to_unprotect block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.1.1/docs/resources/branch_protection#allowed_to_unprotect BranchProtection#allowed_to_unprotect}

---

##### `allowForcePush`<sup>Optional</sup> <a name="allowForcePush" id="@cdktf/provider-gitlab.branchProtection.BranchProtectionConfig.property.allowForcePush"></a>

```typescript
public readonly allowForcePush: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Can be set to true to allow users with push access to force push.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.1.1/docs/resources/branch_protection#allow_force_push BranchProtection#allow_force_push}

---

##### `codeOwnerApprovalRequired`<sup>Optional</sup> <a name="codeOwnerApprovalRequired" id="@cdktf/provider-gitlab.branchProtection.BranchProtectionConfig.property.codeOwnerApprovalRequired"></a>

```typescript
public readonly codeOwnerApprovalRequired: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Can be set to true to require code owner approval before merging. Only available for Premium and Ultimate instances.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.1.1/docs/resources/branch_protection#code_owner_approval_required BranchProtection#code_owner_approval_required}

---

##### `mergeAccessLevel`<sup>Optional</sup> <a name="mergeAccessLevel" id="@cdktf/provider-gitlab.branchProtection.BranchProtectionConfig.property.mergeAccessLevel"></a>

```typescript
public readonly mergeAccessLevel: string;
```

- *Type:* string

Access levels allowed to merge. Valid values are: `no one`, `developer`, `maintainer`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.1.1/docs/resources/branch_protection#merge_access_level BranchProtection#merge_access_level}

---

##### `pushAccessLevel`<sup>Optional</sup> <a name="pushAccessLevel" id="@cdktf/provider-gitlab.branchProtection.BranchProtectionConfig.property.pushAccessLevel"></a>

```typescript
public readonly pushAccessLevel: string;
```

- *Type:* string

Access levels allowed to push. Valid values are: `no one`, `developer`, `maintainer`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.1.1/docs/resources/branch_protection#push_access_level BranchProtection#push_access_level}

---

##### `unprotectAccessLevel`<sup>Optional</sup> <a name="unprotectAccessLevel" id="@cdktf/provider-gitlab.branchProtection.BranchProtectionConfig.property.unprotectAccessLevel"></a>

```typescript
public readonly unprotectAccessLevel: string;
```

- *Type:* string

Access levels allowed to unprotect. Valid values are: `developer`, `maintainer`, `admin`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.1.1/docs/resources/branch_protection#unprotect_access_level BranchProtection#unprotect_access_level}

---

## Classes <a name="Classes" id="Classes"></a>

### BranchProtectionAllowedToMergeList <a name="BranchProtectionAllowedToMergeList" id="@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToMergeList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToMergeList.Initializer"></a>

```typescript
import { branchProtection } from '@cdktf/provider-gitlab'

new branchProtection.BranchProtectionAllowedToMergeList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToMergeList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToMergeList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToMergeList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToMergeList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToMergeList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToMergeList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToMergeList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToMergeList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToMergeList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToMergeList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToMergeList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToMergeList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToMergeList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToMergeList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToMergeList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToMergeList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToMergeList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToMergeList.get"></a>

```typescript
public get(index: number): BranchProtectionAllowedToMergeOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToMergeList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToMergeList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToMergeList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToMergeList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToMerge">BranchProtectionAllowedToMerge</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToMergeList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToMergeList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToMergeList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | BranchProtectionAllowedToMerge[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToMerge">BranchProtectionAllowedToMerge</a>[]

---


### BranchProtectionAllowedToMergeOutputReference <a name="BranchProtectionAllowedToMergeOutputReference" id="@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToMergeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToMergeOutputReference.Initializer"></a>

```typescript
import { branchProtection } from '@cdktf/provider-gitlab'

new branchProtection.BranchProtectionAllowedToMergeOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToMergeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToMergeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToMergeOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToMergeOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToMergeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToMergeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToMergeOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToMergeOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToMergeOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToMergeOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToMergeOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToMergeOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToMergeOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToMergeOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToMergeOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToMergeOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToMergeOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToMergeOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToMergeOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToMergeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToMergeOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToMergeOutputReference.resetGroupId">resetGroupId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToMergeOutputReference.resetUserId">resetUserId</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToMergeOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToMergeOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToMergeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToMergeOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToMergeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToMergeOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToMergeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToMergeOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToMergeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToMergeOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToMergeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToMergeOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToMergeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToMergeOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToMergeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToMergeOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToMergeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToMergeOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToMergeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToMergeOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToMergeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToMergeOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToMergeOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToMergeOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetGroupId` <a name="resetGroupId" id="@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToMergeOutputReference.resetGroupId"></a>

```typescript
public resetGroupId(): void
```

##### `resetUserId` <a name="resetUserId" id="@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToMergeOutputReference.resetUserId"></a>

```typescript
public resetUserId(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToMergeOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToMergeOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToMergeOutputReference.property.accessLevel">accessLevel</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToMergeOutputReference.property.accessLevelDescription">accessLevelDescription</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToMergeOutputReference.property.groupIdInput">groupIdInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToMergeOutputReference.property.userIdInput">userIdInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToMergeOutputReference.property.groupId">groupId</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToMergeOutputReference.property.userId">userId</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToMergeOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToMerge">BranchProtectionAllowedToMerge</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToMergeOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToMergeOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `accessLevel`<sup>Required</sup> <a name="accessLevel" id="@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToMergeOutputReference.property.accessLevel"></a>

```typescript
public readonly accessLevel: string;
```

- *Type:* string

---

##### `accessLevelDescription`<sup>Required</sup> <a name="accessLevelDescription" id="@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToMergeOutputReference.property.accessLevelDescription"></a>

```typescript
public readonly accessLevelDescription: string;
```

- *Type:* string

---

##### `groupIdInput`<sup>Optional</sup> <a name="groupIdInput" id="@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToMergeOutputReference.property.groupIdInput"></a>

```typescript
public readonly groupIdInput: number;
```

- *Type:* number

---

##### `userIdInput`<sup>Optional</sup> <a name="userIdInput" id="@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToMergeOutputReference.property.userIdInput"></a>

```typescript
public readonly userIdInput: number;
```

- *Type:* number

---

##### `groupId`<sup>Required</sup> <a name="groupId" id="@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToMergeOutputReference.property.groupId"></a>

```typescript
public readonly groupId: number;
```

- *Type:* number

---

##### `userId`<sup>Required</sup> <a name="userId" id="@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToMergeOutputReference.property.userId"></a>

```typescript
public readonly userId: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToMergeOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | BranchProtectionAllowedToMerge;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToMerge">BranchProtectionAllowedToMerge</a>

---


### BranchProtectionAllowedToPushList <a name="BranchProtectionAllowedToPushList" id="@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToPushList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToPushList.Initializer"></a>

```typescript
import { branchProtection } from '@cdktf/provider-gitlab'

new branchProtection.BranchProtectionAllowedToPushList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToPushList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToPushList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToPushList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToPushList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToPushList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToPushList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToPushList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToPushList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToPushList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToPushList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToPushList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToPushList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToPushList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToPushList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToPushList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToPushList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToPushList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToPushList.get"></a>

```typescript
public get(index: number): BranchProtectionAllowedToPushOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToPushList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToPushList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToPushList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToPushList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToPush">BranchProtectionAllowedToPush</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToPushList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToPushList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToPushList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | BranchProtectionAllowedToPush[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToPush">BranchProtectionAllowedToPush</a>[]

---


### BranchProtectionAllowedToPushOutputReference <a name="BranchProtectionAllowedToPushOutputReference" id="@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToPushOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToPushOutputReference.Initializer"></a>

```typescript
import { branchProtection } from '@cdktf/provider-gitlab'

new branchProtection.BranchProtectionAllowedToPushOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToPushOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToPushOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToPushOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToPushOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToPushOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToPushOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToPushOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToPushOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToPushOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToPushOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToPushOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToPushOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToPushOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToPushOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToPushOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToPushOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToPushOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToPushOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToPushOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToPushOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToPushOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToPushOutputReference.resetDeployKeyId">resetDeployKeyId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToPushOutputReference.resetGroupId">resetGroupId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToPushOutputReference.resetUserId">resetUserId</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToPushOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToPushOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToPushOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToPushOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToPushOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToPushOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToPushOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToPushOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToPushOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToPushOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToPushOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToPushOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToPushOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToPushOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToPushOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToPushOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToPushOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToPushOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToPushOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToPushOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToPushOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToPushOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToPushOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToPushOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDeployKeyId` <a name="resetDeployKeyId" id="@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToPushOutputReference.resetDeployKeyId"></a>

```typescript
public resetDeployKeyId(): void
```

##### `resetGroupId` <a name="resetGroupId" id="@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToPushOutputReference.resetGroupId"></a>

```typescript
public resetGroupId(): void
```

##### `resetUserId` <a name="resetUserId" id="@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToPushOutputReference.resetUserId"></a>

```typescript
public resetUserId(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToPushOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToPushOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToPushOutputReference.property.accessLevel">accessLevel</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToPushOutputReference.property.accessLevelDescription">accessLevelDescription</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToPushOutputReference.property.deployKeyIdInput">deployKeyIdInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToPushOutputReference.property.groupIdInput">groupIdInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToPushOutputReference.property.userIdInput">userIdInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToPushOutputReference.property.deployKeyId">deployKeyId</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToPushOutputReference.property.groupId">groupId</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToPushOutputReference.property.userId">userId</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToPushOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToPush">BranchProtectionAllowedToPush</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToPushOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToPushOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `accessLevel`<sup>Required</sup> <a name="accessLevel" id="@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToPushOutputReference.property.accessLevel"></a>

```typescript
public readonly accessLevel: string;
```

- *Type:* string

---

##### `accessLevelDescription`<sup>Required</sup> <a name="accessLevelDescription" id="@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToPushOutputReference.property.accessLevelDescription"></a>

```typescript
public readonly accessLevelDescription: string;
```

- *Type:* string

---

##### `deployKeyIdInput`<sup>Optional</sup> <a name="deployKeyIdInput" id="@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToPushOutputReference.property.deployKeyIdInput"></a>

```typescript
public readonly deployKeyIdInput: number;
```

- *Type:* number

---

##### `groupIdInput`<sup>Optional</sup> <a name="groupIdInput" id="@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToPushOutputReference.property.groupIdInput"></a>

```typescript
public readonly groupIdInput: number;
```

- *Type:* number

---

##### `userIdInput`<sup>Optional</sup> <a name="userIdInput" id="@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToPushOutputReference.property.userIdInput"></a>

```typescript
public readonly userIdInput: number;
```

- *Type:* number

---

##### `deployKeyId`<sup>Required</sup> <a name="deployKeyId" id="@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToPushOutputReference.property.deployKeyId"></a>

```typescript
public readonly deployKeyId: number;
```

- *Type:* number

---

##### `groupId`<sup>Required</sup> <a name="groupId" id="@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToPushOutputReference.property.groupId"></a>

```typescript
public readonly groupId: number;
```

- *Type:* number

---

##### `userId`<sup>Required</sup> <a name="userId" id="@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToPushOutputReference.property.userId"></a>

```typescript
public readonly userId: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToPushOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | BranchProtectionAllowedToPush;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToPush">BranchProtectionAllowedToPush</a>

---


### BranchProtectionAllowedToUnprotectList <a name="BranchProtectionAllowedToUnprotectList" id="@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToUnprotectList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToUnprotectList.Initializer"></a>

```typescript
import { branchProtection } from '@cdktf/provider-gitlab'

new branchProtection.BranchProtectionAllowedToUnprotectList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToUnprotectList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToUnprotectList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToUnprotectList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToUnprotectList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToUnprotectList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToUnprotectList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToUnprotectList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToUnprotectList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToUnprotectList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToUnprotectList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToUnprotectList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToUnprotectList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToUnprotectList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToUnprotectList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToUnprotectList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToUnprotectList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToUnprotectList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToUnprotectList.get"></a>

```typescript
public get(index: number): BranchProtectionAllowedToUnprotectOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToUnprotectList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToUnprotectList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToUnprotectList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToUnprotectList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToUnprotect">BranchProtectionAllowedToUnprotect</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToUnprotectList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToUnprotectList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToUnprotectList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | BranchProtectionAllowedToUnprotect[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToUnprotect">BranchProtectionAllowedToUnprotect</a>[]

---


### BranchProtectionAllowedToUnprotectOutputReference <a name="BranchProtectionAllowedToUnprotectOutputReference" id="@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToUnprotectOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToUnprotectOutputReference.Initializer"></a>

```typescript
import { branchProtection } from '@cdktf/provider-gitlab'

new branchProtection.BranchProtectionAllowedToUnprotectOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToUnprotectOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToUnprotectOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToUnprotectOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToUnprotectOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToUnprotectOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToUnprotectOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToUnprotectOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToUnprotectOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToUnprotectOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToUnprotectOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToUnprotectOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToUnprotectOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToUnprotectOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToUnprotectOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToUnprotectOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToUnprotectOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToUnprotectOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToUnprotectOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToUnprotectOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToUnprotectOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToUnprotectOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToUnprotectOutputReference.resetGroupId">resetGroupId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToUnprotectOutputReference.resetUserId">resetUserId</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToUnprotectOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToUnprotectOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToUnprotectOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToUnprotectOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToUnprotectOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToUnprotectOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToUnprotectOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToUnprotectOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToUnprotectOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToUnprotectOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToUnprotectOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToUnprotectOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToUnprotectOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToUnprotectOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToUnprotectOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToUnprotectOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToUnprotectOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToUnprotectOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToUnprotectOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToUnprotectOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToUnprotectOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToUnprotectOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToUnprotectOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToUnprotectOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetGroupId` <a name="resetGroupId" id="@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToUnprotectOutputReference.resetGroupId"></a>

```typescript
public resetGroupId(): void
```

##### `resetUserId` <a name="resetUserId" id="@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToUnprotectOutputReference.resetUserId"></a>

```typescript
public resetUserId(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToUnprotectOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToUnprotectOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToUnprotectOutputReference.property.accessLevel">accessLevel</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToUnprotectOutputReference.property.accessLevelDescription">accessLevelDescription</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToUnprotectOutputReference.property.groupIdInput">groupIdInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToUnprotectOutputReference.property.userIdInput">userIdInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToUnprotectOutputReference.property.groupId">groupId</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToUnprotectOutputReference.property.userId">userId</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToUnprotectOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToUnprotect">BranchProtectionAllowedToUnprotect</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToUnprotectOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToUnprotectOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `accessLevel`<sup>Required</sup> <a name="accessLevel" id="@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToUnprotectOutputReference.property.accessLevel"></a>

```typescript
public readonly accessLevel: string;
```

- *Type:* string

---

##### `accessLevelDescription`<sup>Required</sup> <a name="accessLevelDescription" id="@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToUnprotectOutputReference.property.accessLevelDescription"></a>

```typescript
public readonly accessLevelDescription: string;
```

- *Type:* string

---

##### `groupIdInput`<sup>Optional</sup> <a name="groupIdInput" id="@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToUnprotectOutputReference.property.groupIdInput"></a>

```typescript
public readonly groupIdInput: number;
```

- *Type:* number

---

##### `userIdInput`<sup>Optional</sup> <a name="userIdInput" id="@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToUnprotectOutputReference.property.userIdInput"></a>

```typescript
public readonly userIdInput: number;
```

- *Type:* number

---

##### `groupId`<sup>Required</sup> <a name="groupId" id="@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToUnprotectOutputReference.property.groupId"></a>

```typescript
public readonly groupId: number;
```

- *Type:* number

---

##### `userId`<sup>Required</sup> <a name="userId" id="@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToUnprotectOutputReference.property.userId"></a>

```typescript
public readonly userId: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToUnprotectOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | BranchProtectionAllowedToUnprotect;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToUnprotect">BranchProtectionAllowedToUnprotect</a>

---



