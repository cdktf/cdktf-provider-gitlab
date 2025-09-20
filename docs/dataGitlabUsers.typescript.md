# `dataGitlabUsers` Submodule <a name="`dataGitlabUsers` Submodule" id="@cdktf/provider-gitlab.dataGitlabUsers"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataGitlabUsers <a name="DataGitlabUsers" id="@cdktf/provider-gitlab.dataGitlabUsers.DataGitlabUsers"></a>

Represents a {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.4.0/docs/data-sources/users gitlab_users}.

#### Initializers <a name="Initializers" id="@cdktf/provider-gitlab.dataGitlabUsers.DataGitlabUsers.Initializer"></a>

```typescript
import { dataGitlabUsers } from '@cdktf/provider-gitlab'

new dataGitlabUsers.DataGitlabUsers(scope: Construct, id: string, config?: DataGitlabUsersConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabUsers.DataGitlabUsers.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabUsers.DataGitlabUsers.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabUsers.DataGitlabUsers.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-gitlab.dataGitlabUsers.DataGitlabUsersConfig">DataGitlabUsersConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-gitlab.dataGitlabUsers.DataGitlabUsers.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-gitlab.dataGitlabUsers.DataGitlabUsers.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Optional</sup> <a name="config" id="@cdktf/provider-gitlab.dataGitlabUsers.DataGitlabUsers.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-gitlab.dataGitlabUsers.DataGitlabUsersConfig">DataGitlabUsersConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabUsers.DataGitlabUsers.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabUsers.DataGitlabUsers.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabUsers.DataGitlabUsers.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabUsers.DataGitlabUsers.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabUsers.DataGitlabUsers.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabUsers.DataGitlabUsers.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabUsers.DataGitlabUsers.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabUsers.DataGitlabUsers.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabUsers.DataGitlabUsers.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabUsers.DataGitlabUsers.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabUsers.DataGitlabUsers.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabUsers.DataGitlabUsers.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabUsers.DataGitlabUsers.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabUsers.DataGitlabUsers.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabUsers.DataGitlabUsers.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabUsers.DataGitlabUsers.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabUsers.DataGitlabUsers.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabUsers.DataGitlabUsers.resetActive">resetActive</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabUsers.DataGitlabUsers.resetBlocked">resetBlocked</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabUsers.DataGitlabUsers.resetCreatedAfter">resetCreatedAfter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabUsers.DataGitlabUsers.resetCreatedBefore">resetCreatedBefore</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabUsers.DataGitlabUsers.resetExcludeExternal">resetExcludeExternal</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabUsers.DataGitlabUsers.resetExcludeInternal">resetExcludeInternal</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabUsers.DataGitlabUsers.resetExternal">resetExternal</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabUsers.DataGitlabUsers.resetExternProvider">resetExternProvider</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabUsers.DataGitlabUsers.resetExternUid">resetExternUid</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabUsers.DataGitlabUsers.resetHumans">resetHumans</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabUsers.DataGitlabUsers.resetOrderBy">resetOrderBy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabUsers.DataGitlabUsers.resetSearch">resetSearch</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabUsers.DataGitlabUsers.resetSort">resetSort</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabUsers.DataGitlabUsers.resetUsername">resetUsername</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabUsers.DataGitlabUsers.resetWithoutProjectBots">resetWithoutProjectBots</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-gitlab.dataGitlabUsers.DataGitlabUsers.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-gitlab.dataGitlabUsers.DataGitlabUsers.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-gitlab.dataGitlabUsers.DataGitlabUsers.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-gitlab.dataGitlabUsers.DataGitlabUsers.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-gitlab.dataGitlabUsers.DataGitlabUsers.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-gitlab.dataGitlabUsers.DataGitlabUsers.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-gitlab.dataGitlabUsers.DataGitlabUsers.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-gitlab.dataGitlabUsers.DataGitlabUsers.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-gitlab.dataGitlabUsers.DataGitlabUsers.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-gitlab.dataGitlabUsers.DataGitlabUsers.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-gitlab.dataGitlabUsers.DataGitlabUsers.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.dataGitlabUsers.DataGitlabUsers.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-gitlab.dataGitlabUsers.DataGitlabUsers.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.dataGitlabUsers.DataGitlabUsers.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-gitlab.dataGitlabUsers.DataGitlabUsers.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.dataGitlabUsers.DataGitlabUsers.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-gitlab.dataGitlabUsers.DataGitlabUsers.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.dataGitlabUsers.DataGitlabUsers.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-gitlab.dataGitlabUsers.DataGitlabUsers.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.dataGitlabUsers.DataGitlabUsers.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-gitlab.dataGitlabUsers.DataGitlabUsers.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.dataGitlabUsers.DataGitlabUsers.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-gitlab.dataGitlabUsers.DataGitlabUsers.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.dataGitlabUsers.DataGitlabUsers.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-gitlab.dataGitlabUsers.DataGitlabUsers.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.dataGitlabUsers.DataGitlabUsers.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-gitlab.dataGitlabUsers.DataGitlabUsers.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.dataGitlabUsers.DataGitlabUsers.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-gitlab.dataGitlabUsers.DataGitlabUsers.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.dataGitlabUsers.DataGitlabUsers.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `resetActive` <a name="resetActive" id="@cdktf/provider-gitlab.dataGitlabUsers.DataGitlabUsers.resetActive"></a>

```typescript
public resetActive(): void
```

##### `resetBlocked` <a name="resetBlocked" id="@cdktf/provider-gitlab.dataGitlabUsers.DataGitlabUsers.resetBlocked"></a>

```typescript
public resetBlocked(): void
```

##### `resetCreatedAfter` <a name="resetCreatedAfter" id="@cdktf/provider-gitlab.dataGitlabUsers.DataGitlabUsers.resetCreatedAfter"></a>

```typescript
public resetCreatedAfter(): void
```

##### `resetCreatedBefore` <a name="resetCreatedBefore" id="@cdktf/provider-gitlab.dataGitlabUsers.DataGitlabUsers.resetCreatedBefore"></a>

```typescript
public resetCreatedBefore(): void
```

##### `resetExcludeExternal` <a name="resetExcludeExternal" id="@cdktf/provider-gitlab.dataGitlabUsers.DataGitlabUsers.resetExcludeExternal"></a>

```typescript
public resetExcludeExternal(): void
```

##### `resetExcludeInternal` <a name="resetExcludeInternal" id="@cdktf/provider-gitlab.dataGitlabUsers.DataGitlabUsers.resetExcludeInternal"></a>

```typescript
public resetExcludeInternal(): void
```

##### `resetExternal` <a name="resetExternal" id="@cdktf/provider-gitlab.dataGitlabUsers.DataGitlabUsers.resetExternal"></a>

```typescript
public resetExternal(): void
```

##### `resetExternProvider` <a name="resetExternProvider" id="@cdktf/provider-gitlab.dataGitlabUsers.DataGitlabUsers.resetExternProvider"></a>

```typescript
public resetExternProvider(): void
```

##### `resetExternUid` <a name="resetExternUid" id="@cdktf/provider-gitlab.dataGitlabUsers.DataGitlabUsers.resetExternUid"></a>

```typescript
public resetExternUid(): void
```

##### `resetHumans` <a name="resetHumans" id="@cdktf/provider-gitlab.dataGitlabUsers.DataGitlabUsers.resetHumans"></a>

```typescript
public resetHumans(): void
```

##### `resetOrderBy` <a name="resetOrderBy" id="@cdktf/provider-gitlab.dataGitlabUsers.DataGitlabUsers.resetOrderBy"></a>

```typescript
public resetOrderBy(): void
```

##### `resetSearch` <a name="resetSearch" id="@cdktf/provider-gitlab.dataGitlabUsers.DataGitlabUsers.resetSearch"></a>

```typescript
public resetSearch(): void
```

##### `resetSort` <a name="resetSort" id="@cdktf/provider-gitlab.dataGitlabUsers.DataGitlabUsers.resetSort"></a>

```typescript
public resetSort(): void
```

##### `resetUsername` <a name="resetUsername" id="@cdktf/provider-gitlab.dataGitlabUsers.DataGitlabUsers.resetUsername"></a>

```typescript
public resetUsername(): void
```

##### `resetWithoutProjectBots` <a name="resetWithoutProjectBots" id="@cdktf/provider-gitlab.dataGitlabUsers.DataGitlabUsers.resetWithoutProjectBots"></a>

```typescript
public resetWithoutProjectBots(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabUsers.DataGitlabUsers.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabUsers.DataGitlabUsers.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabUsers.DataGitlabUsers.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabUsers.DataGitlabUsers.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataGitlabUsers resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-gitlab.dataGitlabUsers.DataGitlabUsers.isConstruct"></a>

```typescript
import { dataGitlabUsers } from '@cdktf/provider-gitlab'

dataGitlabUsers.DataGitlabUsers.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-gitlab.dataGitlabUsers.DataGitlabUsers.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-gitlab.dataGitlabUsers.DataGitlabUsers.isTerraformElement"></a>

```typescript
import { dataGitlabUsers } from '@cdktf/provider-gitlab'

dataGitlabUsers.DataGitlabUsers.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-gitlab.dataGitlabUsers.DataGitlabUsers.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktf/provider-gitlab.dataGitlabUsers.DataGitlabUsers.isTerraformDataSource"></a>

```typescript
import { dataGitlabUsers } from '@cdktf/provider-gitlab'

dataGitlabUsers.DataGitlabUsers.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-gitlab.dataGitlabUsers.DataGitlabUsers.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-gitlab.dataGitlabUsers.DataGitlabUsers.generateConfigForImport"></a>

```typescript
import { dataGitlabUsers } from '@cdktf/provider-gitlab'

dataGitlabUsers.DataGitlabUsers.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DataGitlabUsers resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-gitlab.dataGitlabUsers.DataGitlabUsers.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-gitlab.dataGitlabUsers.DataGitlabUsers.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataGitlabUsers to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-gitlab.dataGitlabUsers.DataGitlabUsers.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataGitlabUsers that should be imported.

Refer to the {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.4.0/docs/data-sources/users#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-gitlab.dataGitlabUsers.DataGitlabUsers.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataGitlabUsers to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabUsers.DataGitlabUsers.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabUsers.DataGitlabUsers.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabUsers.DataGitlabUsers.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabUsers.DataGitlabUsers.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabUsers.DataGitlabUsers.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabUsers.DataGitlabUsers.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabUsers.DataGitlabUsers.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabUsers.DataGitlabUsers.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabUsers.DataGitlabUsers.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabUsers.DataGitlabUsers.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabUsers.DataGitlabUsers.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabUsers.DataGitlabUsers.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabUsers.DataGitlabUsers.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabUsers.DataGitlabUsers.property.users">users</a></code> | <code><a href="#@cdktf/provider-gitlab.dataGitlabUsers.DataGitlabUsersUsersList">DataGitlabUsersUsersList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabUsers.DataGitlabUsers.property.activeInput">activeInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabUsers.DataGitlabUsers.property.blockedInput">blockedInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabUsers.DataGitlabUsers.property.createdAfterInput">createdAfterInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabUsers.DataGitlabUsers.property.createdBeforeInput">createdBeforeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabUsers.DataGitlabUsers.property.excludeExternalInput">excludeExternalInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabUsers.DataGitlabUsers.property.excludeInternalInput">excludeInternalInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabUsers.DataGitlabUsers.property.externalInput">externalInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabUsers.DataGitlabUsers.property.externProviderInput">externProviderInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabUsers.DataGitlabUsers.property.externUidInput">externUidInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabUsers.DataGitlabUsers.property.humansInput">humansInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabUsers.DataGitlabUsers.property.orderByInput">orderByInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabUsers.DataGitlabUsers.property.searchInput">searchInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabUsers.DataGitlabUsers.property.sortInput">sortInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabUsers.DataGitlabUsers.property.usernameInput">usernameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabUsers.DataGitlabUsers.property.withoutProjectBotsInput">withoutProjectBotsInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabUsers.DataGitlabUsers.property.active">active</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabUsers.DataGitlabUsers.property.blocked">blocked</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabUsers.DataGitlabUsers.property.createdAfter">createdAfter</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabUsers.DataGitlabUsers.property.createdBefore">createdBefore</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabUsers.DataGitlabUsers.property.excludeExternal">excludeExternal</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabUsers.DataGitlabUsers.property.excludeInternal">excludeInternal</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabUsers.DataGitlabUsers.property.external">external</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabUsers.DataGitlabUsers.property.externProvider">externProvider</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabUsers.DataGitlabUsers.property.externUid">externUid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabUsers.DataGitlabUsers.property.humans">humans</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabUsers.DataGitlabUsers.property.orderBy">orderBy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabUsers.DataGitlabUsers.property.search">search</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabUsers.DataGitlabUsers.property.sort">sort</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabUsers.DataGitlabUsers.property.username">username</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabUsers.DataGitlabUsers.property.withoutProjectBots">withoutProjectBots</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-gitlab.dataGitlabUsers.DataGitlabUsers.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-gitlab.dataGitlabUsers.DataGitlabUsers.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-gitlab.dataGitlabUsers.DataGitlabUsers.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-gitlab.dataGitlabUsers.DataGitlabUsers.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-gitlab.dataGitlabUsers.DataGitlabUsers.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-gitlab.dataGitlabUsers.DataGitlabUsers.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-gitlab.dataGitlabUsers.DataGitlabUsers.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-gitlab.dataGitlabUsers.DataGitlabUsers.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-gitlab.dataGitlabUsers.DataGitlabUsers.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-gitlab.dataGitlabUsers.DataGitlabUsers.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-gitlab.dataGitlabUsers.DataGitlabUsers.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-gitlab.dataGitlabUsers.DataGitlabUsers.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-gitlab.dataGitlabUsers.DataGitlabUsers.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `users`<sup>Required</sup> <a name="users" id="@cdktf/provider-gitlab.dataGitlabUsers.DataGitlabUsers.property.users"></a>

```typescript
public readonly users: DataGitlabUsersUsersList;
```

- *Type:* <a href="#@cdktf/provider-gitlab.dataGitlabUsers.DataGitlabUsersUsersList">DataGitlabUsersUsersList</a>

---

##### `activeInput`<sup>Optional</sup> <a name="activeInput" id="@cdktf/provider-gitlab.dataGitlabUsers.DataGitlabUsers.property.activeInput"></a>

```typescript
public readonly activeInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `blockedInput`<sup>Optional</sup> <a name="blockedInput" id="@cdktf/provider-gitlab.dataGitlabUsers.DataGitlabUsers.property.blockedInput"></a>

```typescript
public readonly blockedInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `createdAfterInput`<sup>Optional</sup> <a name="createdAfterInput" id="@cdktf/provider-gitlab.dataGitlabUsers.DataGitlabUsers.property.createdAfterInput"></a>

```typescript
public readonly createdAfterInput: string;
```

- *Type:* string

---

##### `createdBeforeInput`<sup>Optional</sup> <a name="createdBeforeInput" id="@cdktf/provider-gitlab.dataGitlabUsers.DataGitlabUsers.property.createdBeforeInput"></a>

```typescript
public readonly createdBeforeInput: string;
```

- *Type:* string

---

##### `excludeExternalInput`<sup>Optional</sup> <a name="excludeExternalInput" id="@cdktf/provider-gitlab.dataGitlabUsers.DataGitlabUsers.property.excludeExternalInput"></a>

```typescript
public readonly excludeExternalInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `excludeInternalInput`<sup>Optional</sup> <a name="excludeInternalInput" id="@cdktf/provider-gitlab.dataGitlabUsers.DataGitlabUsers.property.excludeInternalInput"></a>

```typescript
public readonly excludeInternalInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `externalInput`<sup>Optional</sup> <a name="externalInput" id="@cdktf/provider-gitlab.dataGitlabUsers.DataGitlabUsers.property.externalInput"></a>

```typescript
public readonly externalInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `externProviderInput`<sup>Optional</sup> <a name="externProviderInput" id="@cdktf/provider-gitlab.dataGitlabUsers.DataGitlabUsers.property.externProviderInput"></a>

```typescript
public readonly externProviderInput: string;
```

- *Type:* string

---

##### `externUidInput`<sup>Optional</sup> <a name="externUidInput" id="@cdktf/provider-gitlab.dataGitlabUsers.DataGitlabUsers.property.externUidInput"></a>

```typescript
public readonly externUidInput: string;
```

- *Type:* string

---

##### `humansInput`<sup>Optional</sup> <a name="humansInput" id="@cdktf/provider-gitlab.dataGitlabUsers.DataGitlabUsers.property.humansInput"></a>

```typescript
public readonly humansInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `orderByInput`<sup>Optional</sup> <a name="orderByInput" id="@cdktf/provider-gitlab.dataGitlabUsers.DataGitlabUsers.property.orderByInput"></a>

```typescript
public readonly orderByInput: string;
```

- *Type:* string

---

##### `searchInput`<sup>Optional</sup> <a name="searchInput" id="@cdktf/provider-gitlab.dataGitlabUsers.DataGitlabUsers.property.searchInput"></a>

```typescript
public readonly searchInput: string;
```

- *Type:* string

---

##### `sortInput`<sup>Optional</sup> <a name="sortInput" id="@cdktf/provider-gitlab.dataGitlabUsers.DataGitlabUsers.property.sortInput"></a>

```typescript
public readonly sortInput: string;
```

- *Type:* string

---

##### `usernameInput`<sup>Optional</sup> <a name="usernameInput" id="@cdktf/provider-gitlab.dataGitlabUsers.DataGitlabUsers.property.usernameInput"></a>

```typescript
public readonly usernameInput: string;
```

- *Type:* string

---

##### `withoutProjectBotsInput`<sup>Optional</sup> <a name="withoutProjectBotsInput" id="@cdktf/provider-gitlab.dataGitlabUsers.DataGitlabUsers.property.withoutProjectBotsInput"></a>

```typescript
public readonly withoutProjectBotsInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `active`<sup>Required</sup> <a name="active" id="@cdktf/provider-gitlab.dataGitlabUsers.DataGitlabUsers.property.active"></a>

```typescript
public readonly active: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `blocked`<sup>Required</sup> <a name="blocked" id="@cdktf/provider-gitlab.dataGitlabUsers.DataGitlabUsers.property.blocked"></a>

```typescript
public readonly blocked: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `createdAfter`<sup>Required</sup> <a name="createdAfter" id="@cdktf/provider-gitlab.dataGitlabUsers.DataGitlabUsers.property.createdAfter"></a>

```typescript
public readonly createdAfter: string;
```

- *Type:* string

---

##### `createdBefore`<sup>Required</sup> <a name="createdBefore" id="@cdktf/provider-gitlab.dataGitlabUsers.DataGitlabUsers.property.createdBefore"></a>

```typescript
public readonly createdBefore: string;
```

- *Type:* string

---

##### `excludeExternal`<sup>Required</sup> <a name="excludeExternal" id="@cdktf/provider-gitlab.dataGitlabUsers.DataGitlabUsers.property.excludeExternal"></a>

```typescript
public readonly excludeExternal: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `excludeInternal`<sup>Required</sup> <a name="excludeInternal" id="@cdktf/provider-gitlab.dataGitlabUsers.DataGitlabUsers.property.excludeInternal"></a>

```typescript
public readonly excludeInternal: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `external`<sup>Required</sup> <a name="external" id="@cdktf/provider-gitlab.dataGitlabUsers.DataGitlabUsers.property.external"></a>

```typescript
public readonly external: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `externProvider`<sup>Required</sup> <a name="externProvider" id="@cdktf/provider-gitlab.dataGitlabUsers.DataGitlabUsers.property.externProvider"></a>

```typescript
public readonly externProvider: string;
```

- *Type:* string

---

##### `externUid`<sup>Required</sup> <a name="externUid" id="@cdktf/provider-gitlab.dataGitlabUsers.DataGitlabUsers.property.externUid"></a>

```typescript
public readonly externUid: string;
```

- *Type:* string

---

##### `humans`<sup>Required</sup> <a name="humans" id="@cdktf/provider-gitlab.dataGitlabUsers.DataGitlabUsers.property.humans"></a>

```typescript
public readonly humans: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `orderBy`<sup>Required</sup> <a name="orderBy" id="@cdktf/provider-gitlab.dataGitlabUsers.DataGitlabUsers.property.orderBy"></a>

```typescript
public readonly orderBy: string;
```

- *Type:* string

---

##### `search`<sup>Required</sup> <a name="search" id="@cdktf/provider-gitlab.dataGitlabUsers.DataGitlabUsers.property.search"></a>

```typescript
public readonly search: string;
```

- *Type:* string

---

##### `sort`<sup>Required</sup> <a name="sort" id="@cdktf/provider-gitlab.dataGitlabUsers.DataGitlabUsers.property.sort"></a>

```typescript
public readonly sort: string;
```

- *Type:* string

---

##### `username`<sup>Required</sup> <a name="username" id="@cdktf/provider-gitlab.dataGitlabUsers.DataGitlabUsers.property.username"></a>

```typescript
public readonly username: string;
```

- *Type:* string

---

##### `withoutProjectBots`<sup>Required</sup> <a name="withoutProjectBots" id="@cdktf/provider-gitlab.dataGitlabUsers.DataGitlabUsers.property.withoutProjectBots"></a>

```typescript
public readonly withoutProjectBots: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabUsers.DataGitlabUsers.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-gitlab.dataGitlabUsers.DataGitlabUsers.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataGitlabUsersConfig <a name="DataGitlabUsersConfig" id="@cdktf/provider-gitlab.dataGitlabUsers.DataGitlabUsersConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-gitlab.dataGitlabUsers.DataGitlabUsersConfig.Initializer"></a>

```typescript
import { dataGitlabUsers } from '@cdktf/provider-gitlab'

const dataGitlabUsersConfig: dataGitlabUsers.DataGitlabUsersConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabUsers.DataGitlabUsersConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabUsers.DataGitlabUsersConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabUsers.DataGitlabUsersConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabUsers.DataGitlabUsersConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabUsers.DataGitlabUsersConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabUsers.DataGitlabUsersConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabUsers.DataGitlabUsersConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabUsers.DataGitlabUsersConfig.property.active">active</a></code> | <code>boolean \| cdktf.IResolvable</code> | Filter users that are active. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabUsers.DataGitlabUsersConfig.property.blocked">blocked</a></code> | <code>boolean \| cdktf.IResolvable</code> | Filter users that are blocked. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabUsers.DataGitlabUsersConfig.property.createdAfter">createdAfter</a></code> | <code>string</code> | Search for users created after a specific date. (Requires administrator privileges). |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabUsers.DataGitlabUsersConfig.property.createdBefore">createdBefore</a></code> | <code>string</code> | Search for users created before a specific date. (Requires administrator privileges). |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabUsers.DataGitlabUsersConfig.property.excludeExternal">excludeExternal</a></code> | <code>boolean \| cdktf.IResolvable</code> | Filters only non external users. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabUsers.DataGitlabUsersConfig.property.excludeInternal">excludeInternal</a></code> | <code>boolean \| cdktf.IResolvable</code> | Filters only non internal users. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabUsers.DataGitlabUsersConfig.property.external">external</a></code> | <code>boolean \| cdktf.IResolvable</code> | Filters only external users. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabUsers.DataGitlabUsersConfig.property.externProvider">externProvider</a></code> | <code>string</code> | Lookup users by external provider. (Requires administrator privileges). |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabUsers.DataGitlabUsersConfig.property.externUid">externUid</a></code> | <code>string</code> | Lookup users by external UID. (Requires administrator privileges). |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabUsers.DataGitlabUsersConfig.property.humans">humans</a></code> | <code>boolean \| cdktf.IResolvable</code> | Filters only regular users that are not bot or internal users. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabUsers.DataGitlabUsersConfig.property.orderBy">orderBy</a></code> | <code>string</code> | Order the users' list by `id`, `name`, `username`, `created_at` or `updated_at`. (Requires administrator privileges). |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabUsers.DataGitlabUsersConfig.property.search">search</a></code> | <code>string</code> | Search users by username, name or email. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabUsers.DataGitlabUsersConfig.property.sort">sort</a></code> | <code>string</code> | Sort users' list in asc or desc order. (Requires administrator privileges). |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabUsers.DataGitlabUsersConfig.property.username">username</a></code> | <code>string</code> | Get a single user with a specific username. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabUsers.DataGitlabUsersConfig.property.withoutProjectBots">withoutProjectBots</a></code> | <code>boolean \| cdktf.IResolvable</code> | Filters user without project bots. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-gitlab.dataGitlabUsers.DataGitlabUsersConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-gitlab.dataGitlabUsers.DataGitlabUsersConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-gitlab.dataGitlabUsers.DataGitlabUsersConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-gitlab.dataGitlabUsers.DataGitlabUsersConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-gitlab.dataGitlabUsers.DataGitlabUsersConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-gitlab.dataGitlabUsers.DataGitlabUsersConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-gitlab.dataGitlabUsers.DataGitlabUsersConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `active`<sup>Optional</sup> <a name="active" id="@cdktf/provider-gitlab.dataGitlabUsers.DataGitlabUsersConfig.property.active"></a>

```typescript
public readonly active: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Filter users that are active.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.4.0/docs/data-sources/users#active DataGitlabUsers#active}

---

##### `blocked`<sup>Optional</sup> <a name="blocked" id="@cdktf/provider-gitlab.dataGitlabUsers.DataGitlabUsersConfig.property.blocked"></a>

```typescript
public readonly blocked: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Filter users that are blocked.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.4.0/docs/data-sources/users#blocked DataGitlabUsers#blocked}

---

##### `createdAfter`<sup>Optional</sup> <a name="createdAfter" id="@cdktf/provider-gitlab.dataGitlabUsers.DataGitlabUsersConfig.property.createdAfter"></a>

```typescript
public readonly createdAfter: string;
```

- *Type:* string

Search for users created after a specific date. (Requires administrator privileges).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.4.0/docs/data-sources/users#created_after DataGitlabUsers#created_after}

---

##### `createdBefore`<sup>Optional</sup> <a name="createdBefore" id="@cdktf/provider-gitlab.dataGitlabUsers.DataGitlabUsersConfig.property.createdBefore"></a>

```typescript
public readonly createdBefore: string;
```

- *Type:* string

Search for users created before a specific date. (Requires administrator privileges).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.4.0/docs/data-sources/users#created_before DataGitlabUsers#created_before}

---

##### `excludeExternal`<sup>Optional</sup> <a name="excludeExternal" id="@cdktf/provider-gitlab.dataGitlabUsers.DataGitlabUsersConfig.property.excludeExternal"></a>

```typescript
public readonly excludeExternal: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Filters only non external users.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.4.0/docs/data-sources/users#exclude_external DataGitlabUsers#exclude_external}

---

##### `excludeInternal`<sup>Optional</sup> <a name="excludeInternal" id="@cdktf/provider-gitlab.dataGitlabUsers.DataGitlabUsersConfig.property.excludeInternal"></a>

```typescript
public readonly excludeInternal: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Filters only non internal users.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.4.0/docs/data-sources/users#exclude_internal DataGitlabUsers#exclude_internal}

---

##### `external`<sup>Optional</sup> <a name="external" id="@cdktf/provider-gitlab.dataGitlabUsers.DataGitlabUsersConfig.property.external"></a>

```typescript
public readonly external: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Filters only external users.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.4.0/docs/data-sources/users#external DataGitlabUsers#external}

---

##### `externProvider`<sup>Optional</sup> <a name="externProvider" id="@cdktf/provider-gitlab.dataGitlabUsers.DataGitlabUsersConfig.property.externProvider"></a>

```typescript
public readonly externProvider: string;
```

- *Type:* string

Lookup users by external provider. (Requires administrator privileges).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.4.0/docs/data-sources/users#extern_provider DataGitlabUsers#extern_provider}

---

##### `externUid`<sup>Optional</sup> <a name="externUid" id="@cdktf/provider-gitlab.dataGitlabUsers.DataGitlabUsersConfig.property.externUid"></a>

```typescript
public readonly externUid: string;
```

- *Type:* string

Lookup users by external UID. (Requires administrator privileges).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.4.0/docs/data-sources/users#extern_uid DataGitlabUsers#extern_uid}

---

##### `humans`<sup>Optional</sup> <a name="humans" id="@cdktf/provider-gitlab.dataGitlabUsers.DataGitlabUsersConfig.property.humans"></a>

```typescript
public readonly humans: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Filters only regular users that are not bot or internal users.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.4.0/docs/data-sources/users#humans DataGitlabUsers#humans}

---

##### `orderBy`<sup>Optional</sup> <a name="orderBy" id="@cdktf/provider-gitlab.dataGitlabUsers.DataGitlabUsersConfig.property.orderBy"></a>

```typescript
public readonly orderBy: string;
```

- *Type:* string

Order the users' list by `id`, `name`, `username`, `created_at` or `updated_at`. (Requires administrator privileges).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.4.0/docs/data-sources/users#order_by DataGitlabUsers#order_by}

---

##### `search`<sup>Optional</sup> <a name="search" id="@cdktf/provider-gitlab.dataGitlabUsers.DataGitlabUsersConfig.property.search"></a>

```typescript
public readonly search: string;
```

- *Type:* string

Search users by username, name or email.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.4.0/docs/data-sources/users#search DataGitlabUsers#search}

---

##### `sort`<sup>Optional</sup> <a name="sort" id="@cdktf/provider-gitlab.dataGitlabUsers.DataGitlabUsersConfig.property.sort"></a>

```typescript
public readonly sort: string;
```

- *Type:* string

Sort users' list in asc or desc order. (Requires administrator privileges).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.4.0/docs/data-sources/users#sort DataGitlabUsers#sort}

---

##### `username`<sup>Optional</sup> <a name="username" id="@cdktf/provider-gitlab.dataGitlabUsers.DataGitlabUsersConfig.property.username"></a>

```typescript
public readonly username: string;
```

- *Type:* string

Get a single user with a specific username.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.4.0/docs/data-sources/users#username DataGitlabUsers#username}

---

##### `withoutProjectBots`<sup>Optional</sup> <a name="withoutProjectBots" id="@cdktf/provider-gitlab.dataGitlabUsers.DataGitlabUsersConfig.property.withoutProjectBots"></a>

```typescript
public readonly withoutProjectBots: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Filters user without project bots.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.4.0/docs/data-sources/users#without_project_bots DataGitlabUsers#without_project_bots}

---

### DataGitlabUsersUsers <a name="DataGitlabUsersUsers" id="@cdktf/provider-gitlab.dataGitlabUsers.DataGitlabUsersUsers"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-gitlab.dataGitlabUsers.DataGitlabUsersUsers.Initializer"></a>

```typescript
import { dataGitlabUsers } from '@cdktf/provider-gitlab'

const dataGitlabUsersUsers: dataGitlabUsers.DataGitlabUsersUsers = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### DataGitlabUsersUsersList <a name="DataGitlabUsersUsersList" id="@cdktf/provider-gitlab.dataGitlabUsers.DataGitlabUsersUsersList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-gitlab.dataGitlabUsers.DataGitlabUsersUsersList.Initializer"></a>

```typescript
import { dataGitlabUsers } from '@cdktf/provider-gitlab'

new dataGitlabUsers.DataGitlabUsersUsersList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabUsers.DataGitlabUsersUsersList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabUsers.DataGitlabUsersUsersList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabUsers.DataGitlabUsersUsersList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-gitlab.dataGitlabUsers.DataGitlabUsersUsersList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.dataGitlabUsers.DataGitlabUsersUsersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-gitlab.dataGitlabUsers.DataGitlabUsersUsersList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabUsers.DataGitlabUsersUsersList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabUsers.DataGitlabUsersUsersList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabUsers.DataGitlabUsersUsersList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabUsers.DataGitlabUsersUsersList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabUsers.DataGitlabUsersUsersList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-gitlab.dataGitlabUsers.DataGitlabUsersUsersList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-gitlab.dataGitlabUsers.DataGitlabUsersUsersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-gitlab.dataGitlabUsers.DataGitlabUsersUsersList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-gitlab.dataGitlabUsers.DataGitlabUsersUsersList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-gitlab.dataGitlabUsers.DataGitlabUsersUsersList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-gitlab.dataGitlabUsers.DataGitlabUsersUsersList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-gitlab.dataGitlabUsers.DataGitlabUsersUsersList.get"></a>

```typescript
public get(index: number): DataGitlabUsersUsersOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-gitlab.dataGitlabUsers.DataGitlabUsersUsersList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabUsers.DataGitlabUsersUsersList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabUsers.DataGitlabUsersUsersList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-gitlab.dataGitlabUsers.DataGitlabUsersUsersList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-gitlab.dataGitlabUsers.DataGitlabUsersUsersList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataGitlabUsersUsersOutputReference <a name="DataGitlabUsersUsersOutputReference" id="@cdktf/provider-gitlab.dataGitlabUsers.DataGitlabUsersUsersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-gitlab.dataGitlabUsers.DataGitlabUsersUsersOutputReference.Initializer"></a>

```typescript
import { dataGitlabUsers } from '@cdktf/provider-gitlab'

new dataGitlabUsers.DataGitlabUsersUsersOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabUsers.DataGitlabUsersUsersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabUsers.DataGitlabUsersUsersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabUsers.DataGitlabUsersUsersOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabUsers.DataGitlabUsersUsersOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-gitlab.dataGitlabUsers.DataGitlabUsersUsersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.dataGitlabUsers.DataGitlabUsersUsersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-gitlab.dataGitlabUsers.DataGitlabUsersUsersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-gitlab.dataGitlabUsers.DataGitlabUsersUsersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabUsers.DataGitlabUsersUsersOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabUsers.DataGitlabUsersUsersOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabUsers.DataGitlabUsersUsersOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabUsers.DataGitlabUsersUsersOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabUsers.DataGitlabUsersUsersOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabUsers.DataGitlabUsersUsersOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabUsers.DataGitlabUsersUsersOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabUsers.DataGitlabUsersUsersOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabUsers.DataGitlabUsersUsersOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabUsers.DataGitlabUsersUsersOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabUsers.DataGitlabUsersUsersOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabUsers.DataGitlabUsersUsersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabUsers.DataGitlabUsersUsersOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-gitlab.dataGitlabUsers.DataGitlabUsersUsersOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-gitlab.dataGitlabUsers.DataGitlabUsersUsersOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.dataGitlabUsers.DataGitlabUsersUsersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-gitlab.dataGitlabUsers.DataGitlabUsersUsersOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.dataGitlabUsers.DataGitlabUsersUsersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-gitlab.dataGitlabUsers.DataGitlabUsersUsersOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.dataGitlabUsers.DataGitlabUsersUsersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-gitlab.dataGitlabUsers.DataGitlabUsersUsersOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.dataGitlabUsers.DataGitlabUsersUsersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-gitlab.dataGitlabUsers.DataGitlabUsersUsersOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.dataGitlabUsers.DataGitlabUsersUsersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-gitlab.dataGitlabUsers.DataGitlabUsersUsersOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.dataGitlabUsers.DataGitlabUsersUsersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-gitlab.dataGitlabUsers.DataGitlabUsersUsersOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.dataGitlabUsers.DataGitlabUsersUsersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-gitlab.dataGitlabUsers.DataGitlabUsersUsersOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.dataGitlabUsers.DataGitlabUsersUsersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-gitlab.dataGitlabUsers.DataGitlabUsersUsersOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.dataGitlabUsers.DataGitlabUsersUsersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-gitlab.dataGitlabUsers.DataGitlabUsersUsersOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-gitlab.dataGitlabUsers.DataGitlabUsersUsersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-gitlab.dataGitlabUsers.DataGitlabUsersUsersOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-gitlab.dataGitlabUsers.DataGitlabUsersUsersOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-gitlab.dataGitlabUsers.DataGitlabUsersUsersOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabUsers.DataGitlabUsersUsersOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabUsers.DataGitlabUsersUsersOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabUsers.DataGitlabUsersUsersOutputReference.property.avatarUrl">avatarUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabUsers.DataGitlabUsersUsersOutputReference.property.bio">bio</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabUsers.DataGitlabUsersUsersOutputReference.property.canCreateGroup">canCreateGroup</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabUsers.DataGitlabUsersUsersOutputReference.property.canCreateProject">canCreateProject</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabUsers.DataGitlabUsersUsersOutputReference.property.colorSchemeId">colorSchemeId</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabUsers.DataGitlabUsersUsersOutputReference.property.createdAt">createdAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabUsers.DataGitlabUsersUsersOutputReference.property.currentSignInAt">currentSignInAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabUsers.DataGitlabUsersUsersOutputReference.property.email">email</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabUsers.DataGitlabUsersUsersOutputReference.property.external">external</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabUsers.DataGitlabUsersUsersOutputReference.property.externUid">externUid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabUsers.DataGitlabUsersUsersOutputReference.property.id">id</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabUsers.DataGitlabUsersUsersOutputReference.property.isAdmin">isAdmin</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabUsers.DataGitlabUsersUsersOutputReference.property.isBot">isBot</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabUsers.DataGitlabUsersUsersOutputReference.property.lastSignInAt">lastSignInAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabUsers.DataGitlabUsersUsersOutputReference.property.linkedin">linkedin</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabUsers.DataGitlabUsersUsersOutputReference.property.location">location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabUsers.DataGitlabUsersUsersOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabUsers.DataGitlabUsersUsersOutputReference.property.namespaceId">namespaceId</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabUsers.DataGitlabUsersUsersOutputReference.property.organization">organization</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabUsers.DataGitlabUsersUsersOutputReference.property.projectsLimit">projectsLimit</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabUsers.DataGitlabUsersUsersOutputReference.property.provider">provider</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabUsers.DataGitlabUsersUsersOutputReference.property.skype">skype</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabUsers.DataGitlabUsersUsersOutputReference.property.state">state</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabUsers.DataGitlabUsersUsersOutputReference.property.themeId">themeId</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabUsers.DataGitlabUsersUsersOutputReference.property.twitter">twitter</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabUsers.DataGitlabUsersUsersOutputReference.property.twoFactorEnabled">twoFactorEnabled</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabUsers.DataGitlabUsersUsersOutputReference.property.username">username</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabUsers.DataGitlabUsersUsersOutputReference.property.websiteUrl">websiteUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabUsers.DataGitlabUsersUsersOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-gitlab.dataGitlabUsers.DataGitlabUsersUsers">DataGitlabUsersUsers</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-gitlab.dataGitlabUsers.DataGitlabUsersUsersOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-gitlab.dataGitlabUsers.DataGitlabUsersUsersOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `avatarUrl`<sup>Required</sup> <a name="avatarUrl" id="@cdktf/provider-gitlab.dataGitlabUsers.DataGitlabUsersUsersOutputReference.property.avatarUrl"></a>

```typescript
public readonly avatarUrl: string;
```

- *Type:* string

---

##### `bio`<sup>Required</sup> <a name="bio" id="@cdktf/provider-gitlab.dataGitlabUsers.DataGitlabUsersUsersOutputReference.property.bio"></a>

```typescript
public readonly bio: string;
```

- *Type:* string

---

##### `canCreateGroup`<sup>Required</sup> <a name="canCreateGroup" id="@cdktf/provider-gitlab.dataGitlabUsers.DataGitlabUsersUsersOutputReference.property.canCreateGroup"></a>

```typescript
public readonly canCreateGroup: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `canCreateProject`<sup>Required</sup> <a name="canCreateProject" id="@cdktf/provider-gitlab.dataGitlabUsers.DataGitlabUsersUsersOutputReference.property.canCreateProject"></a>

```typescript
public readonly canCreateProject: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `colorSchemeId`<sup>Required</sup> <a name="colorSchemeId" id="@cdktf/provider-gitlab.dataGitlabUsers.DataGitlabUsersUsersOutputReference.property.colorSchemeId"></a>

```typescript
public readonly colorSchemeId: number;
```

- *Type:* number

---

##### `createdAt`<sup>Required</sup> <a name="createdAt" id="@cdktf/provider-gitlab.dataGitlabUsers.DataGitlabUsersUsersOutputReference.property.createdAt"></a>

```typescript
public readonly createdAt: string;
```

- *Type:* string

---

##### `currentSignInAt`<sup>Required</sup> <a name="currentSignInAt" id="@cdktf/provider-gitlab.dataGitlabUsers.DataGitlabUsersUsersOutputReference.property.currentSignInAt"></a>

```typescript
public readonly currentSignInAt: string;
```

- *Type:* string

---

##### `email`<sup>Required</sup> <a name="email" id="@cdktf/provider-gitlab.dataGitlabUsers.DataGitlabUsersUsersOutputReference.property.email"></a>

```typescript
public readonly email: string;
```

- *Type:* string

---

##### `external`<sup>Required</sup> <a name="external" id="@cdktf/provider-gitlab.dataGitlabUsers.DataGitlabUsersUsersOutputReference.property.external"></a>

```typescript
public readonly external: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `externUid`<sup>Required</sup> <a name="externUid" id="@cdktf/provider-gitlab.dataGitlabUsers.DataGitlabUsersUsersOutputReference.property.externUid"></a>

```typescript
public readonly externUid: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-gitlab.dataGitlabUsers.DataGitlabUsersUsersOutputReference.property.id"></a>

```typescript
public readonly id: number;
```

- *Type:* number

---

##### `isAdmin`<sup>Required</sup> <a name="isAdmin" id="@cdktf/provider-gitlab.dataGitlabUsers.DataGitlabUsersUsersOutputReference.property.isAdmin"></a>

```typescript
public readonly isAdmin: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `isBot`<sup>Required</sup> <a name="isBot" id="@cdktf/provider-gitlab.dataGitlabUsers.DataGitlabUsersUsersOutputReference.property.isBot"></a>

```typescript
public readonly isBot: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `lastSignInAt`<sup>Required</sup> <a name="lastSignInAt" id="@cdktf/provider-gitlab.dataGitlabUsers.DataGitlabUsersUsersOutputReference.property.lastSignInAt"></a>

```typescript
public readonly lastSignInAt: string;
```

- *Type:* string

---

##### `linkedin`<sup>Required</sup> <a name="linkedin" id="@cdktf/provider-gitlab.dataGitlabUsers.DataGitlabUsersUsersOutputReference.property.linkedin"></a>

```typescript
public readonly linkedin: string;
```

- *Type:* string

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-gitlab.dataGitlabUsers.DataGitlabUsersUsersOutputReference.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-gitlab.dataGitlabUsers.DataGitlabUsersUsersOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `namespaceId`<sup>Required</sup> <a name="namespaceId" id="@cdktf/provider-gitlab.dataGitlabUsers.DataGitlabUsersUsersOutputReference.property.namespaceId"></a>

```typescript
public readonly namespaceId: number;
```

- *Type:* number

---

##### `organization`<sup>Required</sup> <a name="organization" id="@cdktf/provider-gitlab.dataGitlabUsers.DataGitlabUsersUsersOutputReference.property.organization"></a>

```typescript
public readonly organization: string;
```

- *Type:* string

---

##### `projectsLimit`<sup>Required</sup> <a name="projectsLimit" id="@cdktf/provider-gitlab.dataGitlabUsers.DataGitlabUsersUsersOutputReference.property.projectsLimit"></a>

```typescript
public readonly projectsLimit: number;
```

- *Type:* number

---

##### `provider`<sup>Required</sup> <a name="provider" id="@cdktf/provider-gitlab.dataGitlabUsers.DataGitlabUsersUsersOutputReference.property.provider"></a>

```typescript
public readonly provider: string;
```

- *Type:* string

---

##### `skype`<sup>Required</sup> <a name="skype" id="@cdktf/provider-gitlab.dataGitlabUsers.DataGitlabUsersUsersOutputReference.property.skype"></a>

```typescript
public readonly skype: string;
```

- *Type:* string

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktf/provider-gitlab.dataGitlabUsers.DataGitlabUsersUsersOutputReference.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

##### `themeId`<sup>Required</sup> <a name="themeId" id="@cdktf/provider-gitlab.dataGitlabUsers.DataGitlabUsersUsersOutputReference.property.themeId"></a>

```typescript
public readonly themeId: number;
```

- *Type:* number

---

##### `twitter`<sup>Required</sup> <a name="twitter" id="@cdktf/provider-gitlab.dataGitlabUsers.DataGitlabUsersUsersOutputReference.property.twitter"></a>

```typescript
public readonly twitter: string;
```

- *Type:* string

---

##### `twoFactorEnabled`<sup>Required</sup> <a name="twoFactorEnabled" id="@cdktf/provider-gitlab.dataGitlabUsers.DataGitlabUsersUsersOutputReference.property.twoFactorEnabled"></a>

```typescript
public readonly twoFactorEnabled: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `username`<sup>Required</sup> <a name="username" id="@cdktf/provider-gitlab.dataGitlabUsers.DataGitlabUsersUsersOutputReference.property.username"></a>

```typescript
public readonly username: string;
```

- *Type:* string

---

##### `websiteUrl`<sup>Required</sup> <a name="websiteUrl" id="@cdktf/provider-gitlab.dataGitlabUsers.DataGitlabUsersUsersOutputReference.property.websiteUrl"></a>

```typescript
public readonly websiteUrl: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-gitlab.dataGitlabUsers.DataGitlabUsersUsersOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataGitlabUsersUsers;
```

- *Type:* <a href="#@cdktf/provider-gitlab.dataGitlabUsers.DataGitlabUsersUsers">DataGitlabUsersUsers</a>

---



